(function() {
  'use strict';

  const otaCheckbox = document.getElementById('otaPrepaymentEnabled');
  const otaSettings = document.getElementById('otaSettings');
  const channelApplication = document.getElementById('channelApplication');
  const channelList = document.getElementById('channelList');
  const saveButton = document.getElementById('saveButton');
  const notification = document.getElementById('notification');

  // Show/hide settings based on checkbox
  otaCheckbox.addEventListener('change', function() {
    if (this.checked) {
      otaSettings.style.display = 'block';
      // Show channel list if select is 'select'
      if (channelApplication.value === 'select') {
        channelList.style.display = 'block';
      }
    } else {
      otaSettings.style.display = 'none';
      channelList.style.display = 'none';
    }
    // Clear any previous notification
    notification.style.display = 'none';
    notification.className = 'tl-notification';
  });

  // Show/hide channel list based on application select
  channelApplication.addEventListener('change', function() {
    if (this.value === 'select') {
      channelList.style.display = 'block';
    } else {
      channelList.style.display = 'none';
    }
    notification.style.display = 'none';
    notification.className = 'tl-notification';
  });

  // Save button click handler with states
  saveButton.addEventListener('click', function() {
    // Show loading state (optional)
    saveButton.disabled = true;
    saveButton.textContent = 'Сохранение...';

    // Simulate async operation
    setTimeout(function() {
      // Simulate success/error randomly (for demo)
      const isSuccess = Math.random() > 0.3;
      if (isSuccess) {
        showNotification('success', 'Настройки успешно сохранены!');
      } else {
        showNotification('error', 'Ошибка сохранения. Попробуйте снова.');
      }
      saveButton.disabled = false;
      saveButton.textContent = 'Сохранить';
    }, 1500);
  });

  // Helper to show notification
  function showNotification(type, message) {
    notification.className = 'tl-notification ' + type;
    notification.textContent = message;
    notification.style.display = 'block';
  }

  // Empty state: by default show no notification, settings hidden
  // (already initial state)
})();