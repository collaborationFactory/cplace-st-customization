var tenantUrl = tenantName;

var $logo = $('.st-custom-banner .image a.assetLink.tricia-entity-kind-document');
var logoUrl;

if ($logo.length) {
    logoUrl = $logo.attr('href');
    $logo.attr('data-lightbox', 0);
    $logo.html("<img src='" + logoUrl + "' style='width: 100%; height: auto;'/>");
    var backgroundUrl = "url('" + logoUrl +"')";
    $logo.parents(".board").find(".background").css("background-image", backgroundUrl);
}

showUserAvatar(1400);
jQuery('.cplace-layout-tabs-widget-navigation li a').click(function() {
    showUserAvatar(2000);
});


jQuery(window).on('hidden.bs.modal', function() {
    showUserAvatar(1400);
});

function showUserAvatar(t) {
    try {
        setTimeout(function() {
            jQuery(".tricia-entity-kind-person").each(function(index) {
                var userHref = jQuery(this).attr('href').toString().split('/').slice(3, 4).join('/');
                var userImgEl = '<img class="custom-profile-image" src=' + tenantUrl + 'person/downloadThumbnail?id=' + userHref + '>';
                if (!jQuery(this).hasClass('custom-user-reference')) {
                    jQuery(this).prepend(userImgEl);
                    jQuery(this).addClass('custom-user-reference animated fadeInLeft');
                }
            });
        }, t);
    } catch (e) {}
}