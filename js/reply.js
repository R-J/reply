$( document ).ready(function() {
    $( 'a.ReplyComment' ).click( insertName );
});

function insertName() {
    var commentbox = $( '#Form_Comment #Form_Body' );
    var slug = this.href.split( '/' );
    var username = decodeURIComponent( slug[ slug.length - 1 ] );
    commentbox.val( commentbox.val() + '@' + username + ' ' );
    $('html, body').animate({
        scrollTop: $( '.MessageForm.CommentForm' ).offset().top
    }, 800);
    commentbox.focus();
    return false;
}