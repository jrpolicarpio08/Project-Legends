// const prv_drift_btn_bg_start = document.getElementById('btn-drift-border-start');
// const prv_drift_btn_start = document.getElementById('prv-drift-btn-start');

// const prv_drift_btn_bg_mid = document.getElementById('btn-drift-border-mid');
// const prv_drift_btn_mid = document.getElementById('prv-drift-btn-mid');

// const prv_drift_btn_bg_end = document.getElementById('btn-drift-border-end');
// const prv_drift_btn_end = document.getElementById('prv-drift-btn-end');


// prv_drift_btn_bg_start.addEventListener('mouseenter', () => {
//     prv_drift_btn_bg_start.style.backgroundColor = 'white';
// });

// prv_drift_btn_start.addEventListener('mouseleave', () => {
//     prv_drift_btn_bg_start.style.backgroundColor = 'black';
// });

// prv_drift_btn_bg_mid.addEventListener('mouseenter', () => {
//     prv_drift_btn_bg_mid.style.backgroundColor = 'white';
// });

// prv_drift_btn_mid.addEventListener('mouseleave', () => {
//     prv_drift_btn_bg_mid.style.backgroundColor = 'black';
// });

// prv_drift_btn_bg_end.addEventListener('mouseenter', () => {
//     prv_drift_btn_bg_end.style.backgroundColor = 'white';
// });

// prv_drift_btn_end.addEventListener('mouseleave', () => {
//     prv_drift_btn_bg_end.style.backgroundColor = 'black';
// });

// const prv_track_btn_bg_start = document.getElementById('btn-track-border-start');
// const prv_track_btn_start = document.getElementById('prv-track-btn-start');

// const prv_track_btn_bg_mid = document.getElementById('btn-track-border-mid');
// const prv_track_btn_mid = document.getElementById('prv-track-btn-mid');

// const prv_track_btn_bg_end = document.getElementById('btn-track-border-end');
// const prv_track_btn_end = document.getElementById('prv-track-btn-end');


// prv_track_btn_bg_start.addEventListener('mouseenter', () => {
//     prv_track_btn_bg_start.style.backgroundColor = 'white';
// });

// prv_track_btn_start.addEventListener('mouseleave', () => {
//     prv_track_btn_bg_start.style.backgroundColor = 'black';
// });

// prv_track_btn_bg_mid.addEventListener('mouseenter', () => {
//     prv_track_btn_bg_mid.style.backgroundColor = 'white';
// });

// prv_track_btn_mid.addEventListener('mouseleave', () => {
//     prv_track_btn_bg_mid.style.backgroundColor = 'black';
// });

// prv_track_btn_bg_end.addEventListener('mouseenter', () => {
//     prv_track_btn_bg_end.style.backgroundColor = 'white';
// });

// prv_track_btn_end.addEventListener('mouseleave', () => {
//     prv_track_btn_bg_end.style.backgroundColor = 'black';
// });

// const prv_vip_btn_bg_start = document.getElementById('btn-vip-border-start');
// const prv_vip_btn_start = document.getElementById('prv-vip-btn-start');

// const prv_vip_btn_bg_mid = document.getElementById('btn-vip-border-mid');
// const prv_vip_btn_mid = document.getElementById('prv-vip-btn-mid');

// const prv_vip_btn_bg_end = document.getElementById('btn-vip-border-end');
// const prv_vip_btn_end = document.getElementById('prv-vip-btn-end');


// prv_vip_btn_bg_start.addEventListener('mouseenter', () => {
//     prv_vip_btn_bg_start.style.backgroundColor = 'white';
// });

// prv_vip_btn_start.addEventListener('mouseleave', () => {
//     prv_vip_btn_bg_start.style.backgroundColor = 'black';
// });

// prv_vip_btn_bg_mid.addEventListener('mouseenter', () => {
//     prv_vip_btn_bg_mid.style.backgroundColor = 'white';
// });

// prv_vip_btn_mid.addEventListener('mouseleave', () => {
//     prv_vip_btn_bg_mid.style.backgroundColor = 'black';
// });

// prv_vip_btn_bg_end.addEventListener('mouseenter', () => {
//     prv_vip_btn_bg_end.style.backgroundColor = 'white';
// });

// prv_vip_btn_end.addEventListener('mouseleave', () => {
//     prv_vip_btn_bg_end.style.backgroundColor = 'black';
// });
// Function to add hover effects for a group of buttons
function addHoverEffects(groupPrefix) {
    const sections = ['start', 'mid', 'end'];
    sections.forEach((section) => {
      const btnBg = document.getElementById(`btn-${groupPrefix}-border-${section}`);
      const btn = document.getElementById(`prv-${groupPrefix}-btn-${section}`);
      
      btnBg.addEventListener('mouseenter', () => {
        btnBg.style.backgroundColor = 'white';
      });
      
      btn.addEventListener('mouseleave', () => {
        btnBg.style.backgroundColor = 'black';
      });
    });
  }
  
  // Add hover effects to all button groups
  ['drift', 'track', 'vip'].forEach(addHoverEffects);
  
