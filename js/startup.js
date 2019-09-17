/**
 * Web application
 */
const apiUrl = 'https://968aa5a4.us-south.apiconnect.appdomain.cloud/startup';

const guestbook = {
  // add a single guestbood entry
  add(nombre, mail, se_dedican_a, herramientas_ibm, duda) {
    console.log('Sending', nombre, mail, se_dedican_a, herramientas_ibm, duda)
    return $.ajax({
      type: 'PUT',
      url: `${apiUrl}/entries`,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        nombre, 
        mail, 
        se_dedican_a, 
        herramientas_ibm, 
        duda,
      }),
      dataType: 'json',
    });
  }
};

$(document).on('submit', '#entradas', function(e) {
  e.preventDefault();

  guestbook.add(
    $('#nombre').val().trim(),
    $('#mail').val().trim(),
    $('#se_dedican_a').val().trim(),
    $('#herramientas_ibm').val().trim(),
    $('#duda').val().trim(),  
  );
});

