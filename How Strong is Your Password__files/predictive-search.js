var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var INTEL_TYPE_AHEAD = INTEL_TYPE_AHEAD || {};
$(function (){
    var custEnc=function($sel){
            $sel.val(custCharRplHps($sel.val()));
        },
        $boxes = $('.typeAheadSearchBox'),
        searchBoxUserVal;

    $('#hpsform').delegate('input','keypress',function(e){
        var code=(e.keyCode?e.keyCode:e.which);if(code==13){custEnc($('#searchBox'));}
    });

    $(document).bind('click', function (event) {
        if ($(event.target).parents("#hpsform, .predictive-search, .background-slider-items,#predictive-search").length == 0 && !$(event.target).hasClass("predictive-search") && !$(event.target).hasClass("slider-item")) {
            $('#hpsform .predictive-search,#predictive-search').addClass('hideme');
            $('#searchBox').attr('value', $('#searchBox')
                .attr('title'))
            ;
            if(searchBoxUserVal !== null){
                searchBoxUserVal = "";
            }
        }
    });

    $boxes.each(function(){
        var $searchBox = $(this),
            isDefault = $searchBox.attr('id') == 'searchBox',
            bestResultsSel = '#bestResults',
            $bestResults = $(bestResultsSel),
            otherResultsSel = '#otherResults',
            $otherResults = $(otherResultsSel),
            $pred = $('#predictive-search ul li'),
            $doc = $(document);


        /* start keyboard navigation */
        $searchBox.focusin(function (e) {
            $pred.find('a').removeClass('result_hover');
            if(isDefault){
                if (searchBoxUserVal !== null && ($searchBox.val() !== '')) {
                    $searchBox.val(searchBoxUserVal);
                } else {
                    $searchBox.val('');
                }
            }
        })
            .keydown(function (e) {
                searchBoxUserVal = $searchBox.val();
                if (e.keyCode == 40) {
                    e.preventDefault();
                    if ($bestResults.children().length) {
                        $bestResults.find('a').focus().addClass('result_hover');
                    } else {
                        $otherResults.find('li:first-child a').focus().addClass('result_hover');
                    }
                } else if (e.keyCode == 38) {
                    $otherResults.find('li:last-child').children('a').focus().addClass('result_hover');
                }
            });
        $doc.delegate(bestResultsSel + ' a.result_hover', 'keydown', function (e) {
            if (e.keyCode == 40) {
                e.preventDefault();
                $(this).removeClass('result_hover');
                $otherResults.find('li:first-child a').focus().addClass('result_hover');
            } else if (e.keyCode == 38) {
                $(this).removeClass('result_hover');
                $searchBox.focus();
            }
        });
        $doc.delegate(otherResultsSel + ' li a.result_hover', 'keydown', function (e) {
            if (e.keyCode == 40) {
                e.preventDefault();
                $(this).removeClass('result_hover');
                $(this).parent('li').next('li').children('a').focus().addClass('result_hover');
                if ($(this).parent('li').next('li').html() == null) {
                    $searchBox.focus();
                }
            } else if (e.keyCode == 38) {
                $(this).parent('li').prev('li').children('a').focus().addClass('result_hover');
                $(this).removeClass('result_hover');
                if ($(this).parent('li').prev('li').html() == null) {
                    if ($bestResults.children().length) {
                        $bestResults.find('a').focus().addClass('result_hover');
                    } else {
                        $searchBox.focus();
                    }
                }
            }
        });
        $doc.delegate(bestResultsSel, 'mouseover', function (e) {
            searchBoxUserVal = $searchBox.val();
            $pred.find('a').removeClass('result_hover');
            $(this).children('a').focus().addClass('result_hover');
            if (searchBoxUserVal !== null) {
                $searchBox.val(searchBoxUserVal);
            }
        });
        $doc.delegate(otherResultsSel + ' li', 'mouseover', function (e) {
            searchBoxUserVal = $searchBox.val();
            $pred.find('a').removeClass('result_hover');
            $(this).children('a').focus().addClass('result_hover');
            if (searchBoxUserVal !== null) {
                $searchBox.val(searchBoxUserVal);
            }
        }); /* end keyboard navigation */
    });
});
INTEL_TYPE_AHEAD.replaceVal = function(){
    $('#predictive-search ul li a').each(function (index) {
        $(this).focusin(function () {
            var myNewVal = $(this).text();
            $('#searchBox').val(myNewVal);
        });
    });
};
INTEL_TYPE_AHEAD.processJsonpHPResult = function(respJson, inputObj){
    var isBestMatch = respJson[1],
        searchResults = respJson[0],
        $ps = $(".predictive-search"),
        href,
        context,
        tab,
        getQsParam = function(name) {
            name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
                results = regex.exec(location.search);
            return results == null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        };

    $("#otherResults, #bestResults").html('');
    if(searchResults.length == 'undefined' || searchResults.length == 0) {
        $ps.addClass('hideme');
    } else {
        $ps.removeClass('hideme');
        if(isBestMatch) {
            INTEL_TYPE_AHEAD.getBestMatch(inputObj);
            if(searchResults.length > 0) {
                $(".other-match").show();
            }
            else {
                $(".other-match").hide();
            }
        }
        else {
            $(".best-match").hide();
            if(searchResults.length > 0) {
                $(".other-match").show();
            }
        }
        context = getQsParam('context');
        if(!context.length){
            context = inputObj.curCtxt;
        }
        tab = getQsParam('tab');
        if(!tab.length){
            tab = inputObj.curTab;
        }
        for(k = 0; k < searchResults.length; k++) {
            href = INTEL_TYPE_AHEAD.langRootPath+"/search.html?keyword=" + encodeURIComponent(searchResults[k].replace(/'/g,'\u02B9').replace(/</g,'\u02C2').replace(/>/g,'\u02C3'));
            if(context != null){
                href += ('&context=' + context);
            } else if (inputObj.progId == 'edc') {
                href += '&toplevelcategory=Embedded';
            } else if (inputObj.progId == 'itp') {
                href += '&toplevelcategory=ITP';
            } else if (inputObj.progId == 'itcblueribbon') {
                href += '&toplevelcategory=itcblueribbon';
            }
            if(tab != null){
                href += ('&tab=' + tab);
            }
            document.getElementById("otherResults").innerHTML += "<li><a  data-wap='{\"method\":\"typeahead\",\"keyword\":\""+ searchResults[k]+ "\"}' href="+ href + ">" + searchResults[k] + "</a></li>";
        }
    }
    INTEL_TYPE_AHEAD.replaceVal(); //for keyboard accessibility
};
INTEL_TYPE_AHEAD.getBestMatch = function(inputObj) {
    var cb = function(data, xhr){
            if( xhr.status == 200 ) {
                INTEL_TYPE_AHEAD.processBestMatchResults(data, INTEL_TYPE_AHEAD.headingTxt, inputObj);
            }
        },
        params = inputObj.bestMatchParams,
        noInput = inputObj.isSharePoint ? params.q4.length<1 : params.q10.length<30;
    if (noInput) {
        $(".predictive-search").addClass('hideme');
        return;
    }
    if(INTEL_TYPE_AHEAD.xhr && INTEL_TYPE_AHEAD.xhr.readystate != 4){
        INTEL_TYPE_AHEAD.xhr.abort();
    }
    if(INTEL_TYPE_AHEAD.xhr2){
        INTEL_TYPE_AHEAD.xhr2.abort();
    }
    INTEL_TYPE_AHEAD.xhr = $.ajax({
        dataType: 'jsonp',
        url: INTEL_TYPE_AHEAD.bestMatchUrl,
        data: params,
        success: function (data, status, xhr) {
            cb(data, xhr);
        },
        error: function (data, status, xhr) {
            cb(data, xhr);
        }
    });
};
INTEL_TYPE_AHEAD.processBestMatchResults = function(respJson, headingText, inputObj){
    var bestResultsDiv = document.getElementById("bestResults"),
        leftColDiv = document.getElementById("leftCol"),
        resultSetArray = respJson.ResultSet,
        fieldsList = resultSetArray ? resultSetArray[0] : {};
    bestResultsDiv.innerHTML = "";
    leftColDiv.innerHTML = "";
    if(fieldsList.IsFeaturedResult){
        if (resultSetArray != null && resultSetArray.length > 0) {
            if (fieldsList != null && fieldsList != 'undefined') {
                leftColDiv.innerHTML += "<h4>"+headingText+"</h4>";
                var fields = fieldsList.FieldList;
                var title = "",
                    description = "",
                    link = "",
                    thumbnailURL = "",
                    box = document.getElementById("searchBox");
                for(var i = 0; i < fields.length; i++) {
                    if(fields[i].FieldName == "title" || fields[i].FieldName == "sptitle") {
                        title = fields[i].FieldValue;
                    }
                    else if(fields[i].FieldName == "description") {
                        description = fields[i].FieldValue;
                    }
                    else if(fields[i].FieldName == "url"){
                        link = fields[i].FieldValue;
                    }
                    else if(fields[i].FieldName == "thumbnailurl") {
                        thumbnailURL = fields[i].FieldValue;
                    }
                }
                if(description != null && description.length > 160) {
                    description = description.substring(0, 160);
                }
                bestResultsDiv.innerHTML += "<a data-wap='{\"method\":\"featured\",\"keyword\":\""+box.value+"\"}' >" + title + "</a>";
                link = (link.indexOf("?") > -1) ? link + "&wapkw="+ box.value : link + "?wapkw="+ $("#searchBox").val(),
                    $('#bestResults a').attr('href',link );
                if (description != null) {
                    bestResultsDiv.innerHTML +="<p>" + description + "</p>";
                }
                if (thumbnailURL != null) {
                    if(thumbnailURL.indexOf("/content/dam/") > -1) {
                        leftColDiv.innerHTML += "<img src='" + thumbnailURL +".rendition.cq5dam.thumbnail.64.64.png'></img>";
                    }
                    else {
                        leftColDiv.innerHTML += "<img src='" + thumbnailURL +  "'></img>";
                    }
                }
                $(".best-match").show();
            }
        }
    }
};
INTEL_TYPE_AHEAD.getTypeAhead = function(inputObj) {
    var cb = function(data, xhr){
            if( xhr.status == 200 ) {
                INTEL_TYPE_AHEAD.processJsonpHPResult(data, inputObj);
            }
        },
        params = inputObj.params;
    if (params.searchPhrase.length==0) {
        $(".predictive-search").addClass('hideme');
        return;
    }
    if(INTEL_TYPE_AHEAD.xhr && INTEL_TYPE_AHEAD.xhr.readystate != 4){
        INTEL_TYPE_AHEAD.xhr.abort();
    }
    if(INTEL_TYPE_AHEAD.xhr2){
        INTEL_TYPE_AHEAD.xhr2.abort();
    }
    INTEL_TYPE_AHEAD.xhr = $.ajax({
        dataType: 'jsonp',
        url: INTEL_TYPE_AHEAD.typeAheadUrl,
        data: params,
        success: function (data, status, xhr) {
            cb(data, xhr);
        },
        error: function (data, status, xhr) {
            cb(data, xhr);
        }
    });
};
INTEL_TYPE_AHEAD.onSubmitHps = function(searchText, languageRootPath, locale) {
    var $sb = $('#searchBox');
    $sb.val(custCharRplHps($sb.val()));
    var boxVal = document.getElementById("searchBox").value,
        hpsForm = document.getElementById("hpsform");
    //suppress analytics errors
    try{
        waTrackSearch(document.getElementById(boxVal, 'text', '')); //analytic tracking - do not remove
    }
    catch(e){}
    if(boxVal==searchText){
        var action = languageRootPath+'/search.html';
        hpsForm.action = action;
        $sb.attr('name','');
    }
    else {
        hpsForm.action = languageRootPath+'/search.html?keyword=' + encodeURIComponent(boxVal) + '&locale=' + encodeURIComponent('+locale+');
    }
    return true;
};
function custCharRplHps(p){
    return p.replace(/'/g,'\u02B9').replace(/</g,'\u02C2').replace(/>/g,'\u02C3');
}

}
/*
     FILE ARCHIVED ON 19:54:17 Oct 03, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:26:52 Jun 21, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 669.0
  exclusion.robots: 0.079
  exclusion.robots.policy: 0.07
  cdx.remote: 0.057
  esindex: 0.01
  LoadShardBlock: 643.036 (3)
  PetaboxLoader3.datanode: 91.165 (4)
  PetaboxLoader3.resolve: 573.707 (2)
  load_resource: 51.529
*/
