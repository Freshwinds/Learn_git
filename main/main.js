module.exports = function main(a) {
    var sum=0;
	for(var i=0;i<a.length;i++)
		sum+=parseInt(a[i]);
	return sum;
};