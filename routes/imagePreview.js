function previewImage() {
    console.log('previewImage function called')
    const input = document.getElementById('imageUpload');
    const preview = document.getElementById('preview-img');
  
    input.addEventListener('change', function() {
      const file = this.files[0];
      const reader = new FileReader();
  
      reader.onload = function() {
        preview.src = reader.result;
      }
  
      reader.readAsDataURL(file);
    });
  }
