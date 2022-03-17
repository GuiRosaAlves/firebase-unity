mergeInto(LibraryManager.library, {
    GETJSON: function(string path, string objectName, string callback, string fallback){
        var parsePath = Pointer_stringy(path);
        var parseObjectName = Pointer_stringy(objectName);
        var parseCallback = Pointer_stringy(callback);
        var parseFallback = Pointer_stringy(fallback);

        window.alert("Hello, world!");
        try{
            firebase.database().ref(parsePath).once('value').then(function(snapshot){
                unityInstance.Module.SendMessage(parsedObjectName, parsedCallback, JSON.Stringify(snapshot.val()));
            });
        }catch(error){
            unityInstance,Module.SendMessage(parsedObjectName, parsedFallback, error.message);
        }
    }
})