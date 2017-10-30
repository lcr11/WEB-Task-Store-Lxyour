$(function () {
	$(".backhome").addClass("animated flipInX");
	$(".find").addClass("animated flipInX");
	$(".ff").addClass("animated flipInX");
	$(".content").addClass("animated fadeInDownBig");
	var va,
		arr;
	$("#spSearch").on("keyup", function () {
		// alert(1);
		arr = [];
		va = $("#spSearch").val();
		//alert(va);
		if (va) {
			$.ajax({
				//async: false,
				//url: "http://www.kongguanzi.cn/shangpin.json ",
				//url: "./shangpin.txt",
				url: "./shangpin.json ",
				//url:("http://api.bing.com/qsonhs.aspx?q="+va),
				type: "GET",
				dataType: "json",
				error: function () {
					alert("error")
				},
				success: function (data) {
					$("#result").html("");
					$.each(data, function (int, item) {
						if (item.indexOf(va) != -1) {
							arr.push(item);
							//console.log(item)
							var j = "<li class='lis'>" + item + "</li>";
							$("#result").append(j);


						};
					});
					//console.log(arr);
					if (!arr.length) {
						var u = "<li>搜索到0条结果</li>";
						$("#result").html(u);
					}
					$("#result").show(800);
					$("#result .lis").on("click", function () {
						//alert(1)
						var v = $(this).text();
						//alert(v);
						$("#result").hide(500);
						document.querySelector("#spSearch").value = v;
						//$("#spSearch").attr("value",v);
					});
					// console.log(arr);
				}
			});

		} else {
			var s = "<li>搜索到0条结果</li>";
			$("#result").html(s);
		};

		$(document).on("click", function () {
			// alert(1)
			//alert(v);
			$("#result").hide(500);
			//$("#spSearch").attr("value",v);
		});

	});

	//console.log(arr)



})
