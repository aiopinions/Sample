const sample_root = document.getElementById('sample_root');
sample_root.addEventListener('load', () => {
  console.log('page is loaded');
});
const loginbtn = document.createElement('button');
loginbtn.addEventListener('click', () => {
  window.href('/ello');
}
