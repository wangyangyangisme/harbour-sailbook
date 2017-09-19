function getHighlightBackgroundColor(index) {
    switch(index) {
    case 0:
        return Theme.secondaryHighlightColor;
    case 1:
        return "#6778c9";
    case 2:
        return "#292929";
    }
}

function getBackgroundColor(index) {
    switch(index) {
    case 0:
        return Theme.secondaryHighlightColor;
    case 1:
        return "#3b5998";
    case 2:
        return "#191919";
    }
}

function getHighlightColor(index) {
    switch(index) {
    case 0:
        return Theme.highlightColor;
    case 1:
        return "#6778c9";
    case 2:
        return "#696969";
    }
}

function getPrimaryColor(index) {
    switch(index) {
    case 0:
        return Theme.primaryColor;
    case 1:
        return "#f7f7f7";
    case 2:
        return "#AAAAAA";
    }
}

function getMenubarItems() { // Count how many elements we have in our menu bar
    var numberOfItems = (settings.placeBack==1 && fbWebview.canGoBack) + settings.showFeed + settings.showNotifications + settings.showFriends + settings.showMessages + settings.showSearch + settings.showSettings + settings.showGroups + settings.showEvents + settings.showLikedPages;
    return numberOfItems;
}

function handleImagePicker(filePicker) {
    var imageSelector = pageStack.push(Qt.resolvedUrl("../ImageSelectorPage.qml"));
    imageSelector.finished.connect(function(){
        if(imageSelector.imageUrl.length > 0) {
        console.log("[INFO] User selected image: " + imageSelector.imageUrl);
        filePicker.accept(imageSelector.imageUrl.slice(7,imageSelector.imageUrl.length));
        }
        else {
            console.log("[INFO] User canceled image upload");
            filePicker.reject();
        }
    })
}

function getFeedPriority(index) {
    switch(index) {
    case 0:
        return "h_chr";
    case 1:
        return "h_nor";
    }
}

function getThemeFileName(index) {
	//prepared for theming support:
    switch(index) {
    	case true:
        	return "../resources/css/sailbook-theme-night.css";
    	}

	//default, blank theme:
    return "../resources/css/sailbook.css";
}

// DBus properties are returned with a capital letter, this is against the QML code syntax
// -> Objects
function decapitalizeObject(obj) {
    Object.keys(obj).forEach(function (key) {
        var k = key.charAt(0).toLowerCase() + key.slice(1);

        if (k !== key) {
            obj[k] = obj[key];
            delete obj[key]; // Remove old key
        }
    });
    return obj;
}

// -> Strings
function decapitalizeString(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// Force conversion to boolean
function parseBool(value) {
    return value? true: false;
}
