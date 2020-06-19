import './styles.css';
import './Notif';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
            console.log(registration);
            Notification.requestPermission(status => {
                console.log('Notification permission status:', status);
                if(status==='granted'){
                    requestPermission(registration);
                }
              });
          console.log('Service Worker registered! 😎');
        })
        .catch(err => {
          console.log('Registration failed 😫 ', err);
        });
    });
  }