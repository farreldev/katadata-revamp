
  tinymce.init({
    selector: 'textarea#addArticle',
    height: 300,
    menubar: true,
    plugins: [
      'advlist autolink autosave link image lists charmap print preview hr anchor pagebreak',
      'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
      'table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker textpattern'
    ],
    toolbar1:
      'newdocument fullpage | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect',
    content_css: [
      '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
      '//www.tinymce.com/css/codepen.min.css'
    ]
  });
