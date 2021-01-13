document.getElementById('sltChon').addEventListener('change', function () {
    if (document.getElementById('sltChon').value === 'doiCho') {
        document.getElementById('doiViTri').style.display = 'block';
    } else {
        document.getElementById('doiViTri').style.display = 'none';
    }
});

var listNumber = [];

document.getElementById('btnNhap').addEventListener('click', nhapMang);

function nhapMang() {
    var phanTuCuaMang = parseInt(document.getElementById('txtNumber').value);
    listNumber.push(phanTuCuaMang);
    console.log(listNumber);
    document.getElementById('styleBlock').style.display = 'block';
    document.getElementById('hienThiKQ').innerHTML = 'Mảng hiện tại: [' + listNumber + ']';
}

document.getElementById('thucHien').addEventListener('click', function () {
    var phuongThuc = document.getElementById('sltChon').value;
    switch (phuongThuc) {
        case 'tongSoDuong':
            var tong = 0;
            for (var i = 0; i < listNumber.length; i++) {
                if (listNumber[i] > 0) {
                    tong += listNumber[i];
                }
            }
            document.getElementById('styleBlock').style.display = 'block';
            document.getElementById('hienThiKQ').innerHTML = '';
            document.getElementById('hienThiKQ').innerHTML = 'Tổng các số dương trong mảng là: ' + tong;
            break;
        case 'soDuongTrongMang':
            var dem = 0;
            for (var i = 0; i < listNumber.length; i++) {
                if (listNumber[i] > 0) {
                    dem++;
                }
            }
            document.getElementById('styleBlock').style.display = 'block';
            document.getElementById('hienThiKQ').innerHTML = '';
            document.getElementById('hienThiKQ').innerHTML = 'Số lượng các số dương có trong mảng là: ' + dem;
            break;
        case 'timMin':
            var min = listNumber[0];
            for (var i = 0; i < listNumber.length; i++) {
                if (min > listNumber[i]) {
                    min = listNumber[i];
                }
            }
            document.getElementById('styleBlock').style.display = 'block';
            document.getElementById('hienThiKQ').innerHTML = '';
            document.getElementById('hienThiKQ').innerHTML = 'Số nhỏ nhất trong mảng là: ' + min;
            break;
        case 'timMinDuong':
            var min = '';
            for (var i = 0; i < listNumber.length; i++) {
                if (listNumber[i] > 0) {
                    min = listNumber[i];
                    break;
                }
            }
            for (var i = 0; i < listNumber.length; i++) {
                if (min > listNumber[i] && listNumber[i] > 0) {
                    min = listNumber[i];
                }
            }
            document.getElementById('styleBlock').style.display = 'block';
            document.getElementById('hienThiKQ').innerHTML = '';
            document.getElementById('hienThiKQ').innerHTML = 'Số dương nhỏ nhất trong mảng là: ' + min;
            break;
        case 'timSoChan':
            var viTri = '';
            for (var i = 0; i < listNumber.length; i++) {
                if (listNumber[i] % 2 === 0) {
                    viTri = i;
                }

            }
            if (viTri != '') {
                document.getElementById('styleBlock').style.display = 'block';
                document.getElementById('hienThiKQ').innerHTML = '';
                document.getElementById('hienThiKQ').innerHTML = 'Số chẵn cuối cùng trong mảng là: ' + listNumber[viTri];
            } else {
                document.getElementById('styleBlock').style.display = 'block';
                document.getElementById('hienThiKQ').innerHTML = '';
                document.getElementById('hienThiKQ').innerHTML = 'Số chẵn cuối cùng trong mảng là: -1';
            }
            break;
        case 'doiCho':
            var so_1 = parseInt(getEle('txtNumber_1').value);
            var so_2 = parseInt(getEle('txtNumber_2').value);
            var temp = '';
            temp = listNumber[so_1 - 1];
            listNumber[so_1 - 1] = listNumber[so_2 - 1];
            listNumber[so_2 - 1] = temp;
            document.getElementById('hienThiKQ').innerHTML = 'Mảng hiện tại: [' + listNumber + ']';
            break;
        case 'sapXep':
            for (var i = 0; i < listNumber.length - 1; i++) {
                for (var j = i + 1; j < listNumber.length; j++) {
                    if (listNumber[i] > listNumber[j]) {
                        var temp = listNumber[i];
                        listNumber[i] = listNumber[j];
                        listNumber[j] = temp;
                    }
                }
            }
            document.getElementById('hienThiKQ').innerHTML = 'Mảng hiện tại: [' + listNumber + ']';
            break;
    }
});

function getEle(id) {
    return document.getElementById(id);
}
