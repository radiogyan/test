$(function() {
  $('input').on('input', function() {
    // Find the closest set and recalculate it
    var set = $(this).closest('.set');
    // Get your values
    var n1 = parseInt(set.find('.n1').val() || 0);
    var n2 = parseInt(set.find('.n2').val() || 0);
    var n3 = parseInt(set.find('.n3').val() || 0);

    // Set their result
    set.find('.result').val(n1 * n2* n3 *0.5);
  });
});
