function checkDomain() {
    var domainName = $('.domain').val();
    var vendorFiles = ['adform/IFrameManager.html','admotion/afa-iframe.htm','bonzai/bonzaiBuster.html','exponential/buster.html','eyeblaster/addineyeV2.html','eyewonder/interim.html','flashtalking/ftlocal.html','ipinyou/py_buster.html','jivox/jivoxibuster.html','mediaplex/mojofb_v9.html','mixpo/framebust.html','predicta/predicta_bf.html','rockabox/rockabox_buster.html','liquidus/iframeX.htm','controbox/iframebuster.html','spongecell/spongecell-spongecellbuster.html','unicast/unicastIFD.html','adrime/adrime_burst.2.0.0.htm','revjet/revjet_buster.html','kpsule/iframebuster.html'];
    for(var i=0; i < vendorFiles.length; i++) {
        var domainURL = domainName + '/' + vendorFiles[i];
        $.ajax({ 
            url: domainURL,
            dataType:'jsonp',
            success: function () { //pass an anonymous callback function
                alert('Found');
            },
            error:function (xhr, ajaxOptions, thrownError){
                if(xhr.status==404) {
                    // alert(thrownError);
                }
            }
        });
    }
}