function createData(obj) {

    var data = obj;
	
	return{
		get: function(key){
			return data[key];	
		},
		set: function(key,value){
		data[key]=value;	
		}
	}
}

var data = createData({});

data.set("name", "Janek");

console.log( data.get("name") );

