import React, { useEffect, useRef, useState } from 'react';

const StoreLocator = ({ 
  apiKey = "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
  stores = [],
  mapId,
  center = { lat: 28.2096, lng: 83.9856 }, // New Road, Pokhara
  zoom = 15,
  ...customProps 
}) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);

  useEffect(() => {
    const initializeMap = () => {
      if (!window.google || !mapRef.current) return;

      // Create map
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: center,
        zoom: zoom,
        mapId: mapId,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      });

      // Create info window
      const infoWindowInstance = new window.google.maps.InfoWindow();
      setInfoWindow(infoWindowInstance);

      // Add markers for stores
      const newMarkers = stores.map((store, index) => {
        const marker = new window.google.maps.Marker({
          position: store.position,
          map: mapInstance,
          title: store.displayName,
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#1967d2"/>
              </svg>
            `),
            scaledSize: new window.google.maps.Size(30, 30),
            anchor: new window.google.maps.Point(15, 30)
          }
        });

        marker.addListener('click', () => {
          setSelectedStore(store);
          
          const formatHours = (hours) => {
            if (!hours || hours.length === 0) return 'Hours not available';
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            return hours.map(hour => {
              const dayName = days[hour.open.day];
              const openTime = `${hour.open.hour.toString().padStart(2, '0')}:${hour.open.minute.toString().padStart(2, '0')}`;
              const closeTime = `${hour.close.hour.toString().padStart(2, '0')}:${hour.close.minute.toString().padStart(2, '0')}`;
              return `${dayName}: ${openTime} - ${closeTime}`;
            }).join('<br>');
          };

          const content = `
            <div style="max-width: 300px; font-family: 'Roboto', sans-serif;">
              <h3 style="margin: 0 0 10px 0; color: #1967d2; font-size: 18px;">${store.displayName}</h3>
              <p style="margin: 5px 0; color: #212121;"><strong>📍 Address:</strong><br>${store.address}</p>
              ${store.phoneNumber ? `<p style="margin: 5px 0; color: #212121;"><strong>📞 Phone:</strong> <a href="tel:${store.phoneNumber}" style="color: #1967d2;">${store.phoneNumber}</a></p>` : ''}
              ${store.website ? `<p style="margin: 5px 0; color: #212121;"><strong>🌐 Website:</strong> <a href="${store.website}" target="_blank" style="color: #1967d2;">Visit Website</a></p>` : ''}
              ${store.openingHours ? `<p style="margin: 5px 0; color: #212121;"><strong>🕒 Hours:</strong><br><span style="font-size: 12px;">${formatHours(store.openingHours)}</span></p>` : ''}
              <div style="margin-top: 10px;">
                <button onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${store.position.lat},${store.position.lng}', '_blank')" 
                        style="background: #1967d2; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-size: 14px;">
                  Get Directions
                </button>
              </div>
            </div>
          `;

          infoWindowInstance.setContent(content);
          infoWindowInstance.open(mapInstance, marker);
        });

        return marker;
      });

      setMarkers(newMarkers);
      setMap(mapInstance);

      // Fit bounds to show all markers
      if (stores.length > 1) {
        const bounds = new window.google.maps.LatLngBounds();
        stores.forEach(store => bounds.extend(store.position));
        mapInstance.fitBounds(bounds);
      }
    };

    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      // Remove any existing script to avoid conflicts
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,geometry&v=3.55`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      script.onerror = () => {
        console.error('Failed to load Google Maps API');
      };
      document.head.appendChild(script);
    };

    loadGoogleMaps();

    // Cleanup
    return () => {
      if (infoWindow) {
        infoWindow.close();
      }
      markers.forEach(marker => {
        if (marker.setMap) marker.setMap(null);
      });
    };
  }, [apiKey, stores, center, zoom, mapId]);

  const mapContainerStyle = {
    width: '100%',
    height: '100%',
    position: 'relative'
  };

  const sidebarStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    width: '300px',
    maxHeight: '80%',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    zIndex: 1000,
    overflow: 'auto',
    fontFamily: '"Roboto", sans-serif'
  };

  const storeItemStyle = {
    padding: '15px',
    borderBottom: '1px solid #e0e0e0',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  };

  const handleStoreClick = (store, index) => {
    if (map && markers[index]) {
      map.setCenter(store.position);
      map.setZoom(17);
      window.google.maps.event.trigger(markers[index], 'click');
    }
  };

  return (
    <div style={mapContainerStyle}>
      <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
      
      {/* Store List Sidebar */}
      <div style={sidebarStyle}>
        <div style={{ padding: '15px', backgroundColor: '#1967d2', color: 'white', borderRadius: '8px 8px 0 0' }}>
          <h2 style={{ margin: 0, fontSize: '18px' }}>Stores in Pokhara</h2>
          <p style={{ margin: '5px 0 0 0', fontSize: '14px', opacity: 0.9 }}>{stores.length} locations found</p>
        </div>
        
        {stores.map((store, index) => (
          <div 
            key={store.id}
            style={{
              ...storeItemStyle,
              backgroundColor: selectedStore?.id === store.id ? '#f5f5f5' : 'white'
            }}
            onClick={() => handleStoreClick(store, index)}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
            onMouseLeave={(e) => e.target.style.backgroundColor = selectedStore?.id === store.id ? '#f5f5f5' : 'white'}
          >
            <h3 style={{ margin: '0 0 8px 0', color: '#1967d2', fontSize: '16px' }}>{store.displayName}</h3>
            <p style={{ margin: '4px 0', fontSize: '14px', color: '#757575' }}>{store.address}</p>
            {store.phoneNumber && (
              <p style={{ margin: '4px 0', fontSize: '14px', color: '#757575' }}>{store.phoneNumber}</p>
            )}
            {store.openingHours && store.openingHours.length > 0 && (
              <p style={{ margin: '4px 0', fontSize: '12px', color: '#188038' }}>
                Open: {store.openingHours[0].open.hour.toString().padStart(2, '0')}:{store.openingHours[0].open.minute.toString().padStart(2, '0')} - {store.openingHours[0].close.hour.toString().padStart(2, '0')}:{store.openingHours[0].close.minute.toString().padStart(2, '0')}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usage component
const StoreLocatorExample = () => {
  // Store data for New Road, Pokhara, Nepal area
  const pokharaStores = [
    {
      id: 'store1',
      displayName: 'New Road Electronics',
      position: { lat: 28.2096, lng: 83.9856 },
      address: 'New Road, Pokhara-8, Kaski, Nepal',
      phoneNumber: '+977-61-464545',
      website: 'https://example.com',
      openingHours: [
        { open: { day: 0, hour: 10, minute: 0 }, close: { day: 0, hour: 20, minute: 0 } }, // Sunday
        { open: { day: 1, hour: 9, minute: 0 }, close: { day: 1, hour: 20, minute: 0 } },  // Monday
        { open: { day: 2, hour: 9, minute: 0 }, close: { day: 2, hour: 20, minute: 0 } },  // Tuesday
        { open: { day: 3, hour: 9, minute: 0 }, close: { day: 3, hour: 20, minute: 0 } },  // Wednesday
        { open: { day: 4, hour: 9, minute: 0 }, close: { day: 4, hour: 20, minute: 0 } },  // Thursday
        { open: { day: 5, hour: 9, minute: 0 }, close: { day: 5, hour: 20, minute: 0 } },  // Friday
        { open: { day: 6, hour: 10, minute: 0 }, close: { day: 6, hour: 19, minute: 0 } }   // Saturday
      ]
    },
    {
      id: 'store2',
      displayName: 'Pokhara Fashion Center',
      position: { lat: 28.2089, lng: 83.9845 },
      address: 'New Road, Pokhara-8, Kaski, Nepal',
      phoneNumber: '+977-61-465432',
      website: 'https://example.com',
      openingHours: [
        { open: { day: 0, hour: 10, minute: 0 }, close: { day: 0, hour: 19, minute: 0 } },
        { open: { day: 1, hour: 9, minute: 30 }, close: { day: 1, hour: 19, minute: 30 } },
        { open: { day: 2, hour: 9, minute: 30 }, close: { day: 2, hour: 19, minute: 30 } },
        { open: { day: 3, hour: 9, minute: 30 }, close: { day: 3, hour: 19, minute: 30 } },
        { open: { day: 4, hour: 9, minute: 30 }, close: { day: 4, hour: 19, minute: 30 } },
        { open: { day: 5, hour: 9, minute: 30 }, close: { day: 5, hour: 19, minute: 30 } },
        { open: { day: 6, hour: 10, minute: 0 }, close: { day: 6, hour: 18, minute: 0 } }
      ]
    },
    {
      id: 'store3',
      displayName: 'New Road Pharmacy',
      position: { lat: 28.2101, lng: 83.9851 },
      address: 'New Road, Pokhara-8, Kaski, Nepal',
      phoneNumber: '+977-61-463321',
      website: 'https://example.com'
    },
    {
      id: 'store4',
      displayName: 'Lakeside Books & Cafe',
      position: { lat: 28.2083, lng: 83.9862 },
      address: 'Near New Road, Pokhara-6, Kaski, Nepal',
      phoneNumber: '+977-61-467890',
      website: 'https://example.com',
      openingHours: [
        { open: { day: 0, hour: 8, minute: 0 }, close: { day: 0, hour: 21, minute: 0 } },
        { open: { day: 1, hour: 7, minute: 30 }, close: { day: 1, hour: 21, minute: 30 } },
        { open: { day: 2, hour: 7, minute: 30 }, close: { day: 2, hour: 21, minute: 30 } },
        { open: { day: 3, hour: 7, minute: 30 }, close: { day: 3, hour: 21, minute: 30 } },
        { open: { day: 4, hour: 7, minute: 30 }, close: { day: 4, hour: 21, minute: 30 } },
        { open: { day: 5, hour: 7, minute: 30 }, close: { day: 5, hour: 21, minute: 30 } },
        { open: { day: 6, hour: 8, minute: 0 }, close: { day: 6, hour: 22, minute: 0 } }
      ]
    }
  ];

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <StoreLocator 
        stores={pokharaStores}
        center={{ lat: 28.2096, lng: 83.9856 }}
        zoom={15}
      />
    </div>
  );
};

export default StoreLocatorExample;