import './styles/styles.css';  
import './Rapp/RApp';
import './Notif';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
            Notification.requestPermission(status => {
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
