function repeat(t,n){
	var result = "";
	for (var i=0; i<n; i++)
	{
		result = result + t;		
	}
	return result;
}


function sum(arr){
	var result = 0;
	for (var i = 0; i<arr.length; i++)
	{result = result + arr[i];};
	return result;	
	
}

function gridGenerator(m){
	var result = "";
	var arr = [];
	for (var i = 0; i<m;i++)
	{
		arr[i] = [];
		for(var j=0; j<m; j++)
		{
			if((i+j)%2 ==0 && j != m-1)
			{arr[i][j] = "#"};
			if((i+j)%2 ==0 && j == m-1)
			{arr[i][j] = "#\n"};
			if((i+j)%2 ==1 && j != m-1)
			{arr[i][j] = " "};
			if((i+j)%2 ==1 && j == m-1)
			{arr[i][j] = " \n"};
			result += arr[i][j];
		}	
	}
	return result;

}


function join(q,p){
	var result = "";
	if (p == undefined){p=""};
	for (var i = 0; i<q.length; i++)
	{
		if(i==q.length-1)
		{result = result + q[i]}
		else
		{result = result + q[i] + p}	
	}
	return result;
	
}

function paramify(b){
	var result = "";
	var arr = [];
	var i = 0;
	for (x in b)
	{
		if (b.hasOwnProperty(x))
		{arr[i] = x + "=" + b[x];
		i++;}
	}
	arr.sort();
	for (var j = 0; j < arr.length; j++)
	{
		result += arr[j]
		if (j!=arr.length-1) {result += "&"};
	}
	return result;
}
