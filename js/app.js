// Settings page interactivity for Channel Manager prepayment management
(function() {
  'use strict';

  var prepaymentEnabledEl = document.getElementById('prepaymentEnabled');
  var prepaymentFields = document.getElementById('prepaymentFields');
  var prepaymentTypeEl = document.getElementById('prepaymentType');
  var prepaymentValueLabel = document.getElementById('prepaymentValueLabel');
  var prepaymentValueEl = document.getElementById('prepaymentValue');
  var applyToAllEl = document.getElementById('applyToAll');

  // Toggle prepayment fields visibility and update label
  function togglePrepaymentFields() {
    if (prepaymentEnabledEl && prepaymentFields) {
      prepaymentFields.style.display = prepaymentEnabledEl.checked ? 'block' : 'none';
    }
  }

  // Update label text based on prepayment type
  function updatePrepaymentValueLabel() {
    if (prepaymentTypeEl && prepaymentValueLabel) {
      if (prepaymentTypeEl.value === 'percent') {
        prepaymentValueLabel.textContent = 'Процент предоплаты (%)';
      } else {
        prepaymentValueLabel.textContent = 'Сумма предоплаты (в валюте отеля)';
      }
    }
  }

  // When apply to all is checked, disable individual channel checkboxes
  function handleApplyToAll() {
    var channelCheckboxes = document.querySelectorAll('.tl-multiselect-list input[type="checkbox"]');
    channelCheckboxes.forEach(function(cb) {
      cb.disabled = applyToAllEl.checked;
      if (applyToAllEl.checked) {
        cb.checked = true;
      }
    });
  }

  // Save button action (simulate success)
  window.saveSettings = function() {
    alert('Настройки сохранены (демо-режим)');
  };

  // Reset button action
  window.resetSettings = function() {
    if (prepaymentEnabledEl) prepaymentEnabledEl.checked = true;
    if (prepaymentTypeEl) prepaymentTypeEl.value = 'fixed';
    if (prepaymentValueEl) prepaymentValueEl.value = '1000';
    if (applyToAllEl) applyToAllEl.checked = false;
    var channelCheckboxes = document.querySelectorAll('.tl-multiselect-list input[type="checkbox"]');
    channelCheckboxes.forEach(function(cb, index) {
      cb.checked = (index !== 2); // first three checked
      cb.disabled = false;
    });
    togglePrepaymentFields();
    updatePrepaymentValueLabel();
    alert('Настройки сброшены к значениям по умолчанию (демо)');
  };

  // Attach event listeners
  if (prepaymentEnabledEl) {
    prepaymentEnabledEl.addEventListener('change', togglePrepaymentFields);
  }
  if (prepaymentTypeEl) {
    prepaymentTypeEl.addEventListener('change', updatePrepaymentValueLabel);
  }
  if (applyToAllEl) {
    applyToAllEl.addEventListener('change', handleApplyToAll);
  }

  // Initial state
  togglePrepaymentFields();
  updatePrepaymentValueLabel();
  handleApplyToAll();

})();