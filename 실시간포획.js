const scriptName = "�ǽð���ȹ";
function create2DArray(rows, columns) {
    var arr = new Array(rows);
    for (var i = 0; i < rows; i++) {
        arr[i] = new Array(columns);
    }
    return arr;
}

function south_month(month) {
    if (month == 0) {
        return 0;
    } else {
        month = month + 6;
        if (month > 12) {
            month = month - 12;
        }
        return month;
    }
}

function addComma(num) {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
}

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
    if (msg.indexOf("!�ǽð� ") != -1) {
        var cmd = msg.split(" ")[0];
        var data1 = msg.split(" ")[1];
        var data2 = msg.split(" ")[2];

        var list = "";

        if (cmd == "!�ǽð�") {
            var now = new Date();

            var mon = now.getMonth() + 1;
            var day = now.getDate();

            var hour = now.getHours();
            var min = now.getMinutes();

            var mon2 = mon + 12;
            var hour2 = hour + 24;

            var arr2 = [];
            var arr3 = [];

            var arrlength;

            if (data1 == "�ػ깰") {
                var arr = create2DArray(40, 10);
                arrlength = 40;

                arr[0] = ["�̿�", 10, 7, 10, 7, 0, 0, 0, 0, 600];
                arr[1] = ["�ٴ�����", 6, 9, 6, 9, 0, 0, 0, 0, 900];
                arr[2] = ["�ػ�", 11, 4, 11, 4, 0, 0, 0, 0, 500];
                arr[3] = ["�ٴٵ���", 11, 2, 11, 2, 16, 9, 16, 9, 10000];
                arr[4] = ["�Ұ��縮", 0, 0, 0, 0, 0, 0, 0, 0, 500];
                arr[5] = ["����", 5, 9, 5, 9, 0, 0, 0, 0, 1700];
                arr[6] = ["���ʼ���", 5, 9, 5, 9, 16, 9, 16, 9, 2000];
                arr[7] = ["������", 0, 0, 0, 0, 0, 0, 0, 0, 500];
                arr[8] = ["�����޹����ĸ�", 7, 9, 7, 9, 0, 0, 0, 0, 600];
                arr[9] = ["���μ�������", 0, 0, 0, 0, 0, 0, 0, 0, 600];
                arr[10] = ["��������", 0, 0, 0, 0, 0, 0, 0, 0, 2800];
                arr[11] = ["�����ش�ġ", 6, 12, 6, 12, 0, 0, 0, 0, 1500];
                arr[12] = ["��", 9, 2, 9, 2, 0, 0, 0, 0, 1100];
                arr[13] = ["������", 0, 0, 0, 0, 0, 0, 0, 0, 1200];
                arr[14] = ["����", 0, 0, 0, 0, 0, 0, 0, 0, 1000];
                arr[15] = ["�Ҷ�", 3, 5, 9, 12, 0, 0, 0, 0, 1000];
                arr[16] = ["����", 6, 1, 6, 1, 16, 9, 16, 9, 2000];
                arr[17] = ["��հŰ�", 5, 9, 5, 9, 0, 0, 0, 0, 15000];
                arr[18] = ["�޹�����", 3, 6, 9, 11, 16, 9, 16, 9, 1800];
                arr[19] = ["����", 0, 0, 0, 0, 0, 0, 0, 0, 1200];
                arr[20] = ["�칫����", 3, 5, 9, 11, 0, 0, 0, 0, 6000];
                arr[21] = ["������¡��", 5, 8, 5, 8, 16, 9, 16, 9, 10000];
                arr[22] = ["�ݵ��ҿ�¡��", 3, 6, 3, 6, 21, 4, 21, 4, 1400];
                arr[23] = ["�ɰ�", 6, 11, 6, 11, 0, 0, 0, 0, 2200];
                arr[24] = ["�����Ͻ�ũ��", 11, 5, 11, 5, 0, 0, 0, 0, 1900];
                arr[25] = ["���", 11, 4, 11, 4, 0, 0, 0, 0, 6000];
                arr[26] = ["�հ�", 11, 3, 11, 3, 0, 0, 0, 0, 8000];
                arr[27] = ["������", 0, 0, 0, 0, 0, 0, 0, 0, 600];
                arr[28] = ["Ű�ٸ���", 3, 4, 3, 4, 0, 0, 0, 0, 12000];
                arr[29] = ["��������", 6, 9, 6, 9, 16, 9, 16, 9, 3000];
                arr[30] = ["���ʺ�ȫ����", 9, 2, 9, 2, 16, 9, 16, 9, 1400];
                arr[31] = ["������", 0, 0, 0, 0, 16, 9, 16, 9, 2500];
                arr[32] = ["�߻���", 10, 12, 10, 12, 21, 4, 21, 4, 5000];
                arr[33] = ["�ٴ尡��", 4, 6, 12, 1, 0, 0, 0, 0, 4500];
                arr[34] = ["���̾�Ʈ �̼�����", 7, 10, 7, 10, 9, 16, 21, 4, 12000];
                arr[35] = ["������", 7, 9, 7, 9, 21, 4, 21, 4, 2500];
                arr[36] = ["�۰�", 4, 8, 4, 8, 0, 0, 0, 0, 1500];
                arr[37] = ["������", 5, 10, 5, 10, 4, 21, 4, 21, 1100];
                arr[38] = ["���۹���", 8, 9, 8, 9, 16, 9, 16, 9, 700];
                arr[39] = ["�طε���", 10, 2, 10, 2, 0, 0, 0, 0, 5000];
            } else if (data1 == "����") {
                var arr = create2DArray(80, 10);
                arrlength = 80;

                arr[0] = ["�����򳪺�", 9, 6, 9, 6, 4, 19, 4, 19, 160];
                arr[1] = ["�������", 3, 6, 9, 10, 4, 19, 4, 19, 160];
                arr[2] = ["ȣ������", 3, 9, 3, 9, 4, 19, 4, 19, 240];
                arr[3] = ["���񳪺�", 3, 6, 3, 6, 4, 19, 4, 19, 2500];
                arr[4] = ["û�����񳪺�", 4, 8, 4, 8, 4, 19, 4, 19, 300];
                arr[5] = ["�վ�質��", 0, 0, 0, 0, 8, 19, 8, 19, 1000];
                arr[6] = ["�տ�������", 5, 8, 5, 8, 4, 19, 4, 19, 3000];
                arr[7] = ["�ճ���", 9, 11, 9, 11, 8, 17, 8, 17, 140];
                arr[8] = ["��������", 6, 9, 12, 3, 17, 8, 17, 8, 4000];
                arr[9] = ["�Ʊ׸��ƽ�����", 4, 9, 4, 9, 8, 17, 8, 17, 3000];
                arr[10] = ["�����񵵸���ܳ���", 4, 9, 12, 2, 8, 17, 8, 17, 2500];
                arr[11] = ["�˷����������񳪺�", 5, 9, 5, 9, 8, 16, 8, 16, 4000];
                arr[12] = ["����", 0, 0, 0, 0, 19, 4, 19, 4, 130];
                arr[13] = ["��Ʋ�󽺳���", 4, 9, 4, 9, 19, 4, 19, 4, 3000];
                arr[14] = ["���ٰ���ī��������񳪹�", 4, 9, 4, 9, 8, 16, 8, 16, 2500];
                arr[15] = ["��Ʊ���", 4, 11, 4, 11, 8, 19, 8, 19, 200];
                arr[16] = ["��Ǯ��ġ", 8, 11, 8, 11, 8, 19, 8, 19, 600];
                arr[17] = ["�޶ѱ�", 8, 11, 8, 11, 8, 19, 8, 19, 160];
                arr[18] = ["��ġ", 7, 9, 7, 9, 8, 17, 8, 17, 160];
                arr[19] = ["�ͶѶ��", 9, 11, 9, 11, 17, 8, 17, 8, 130];
                arr[20] = ["������", 9, 10, 9, 10, 17, 8, 17, 8, 430];
                arr[21] = ["�縶��", 3, 11, 3, 11, 8, 17, 8, 17, 430];
                arr[22] = ["���ɻ縶��", 3, 7, 3, 7, 8, 17, 8, 17, 2400];
                arr[23] = ["�ܹ�", 3, 7, 3, 7, 8, 17, 8, 17, 200];
                arr[24] = ["��", 0, 0, 0, 0, 0, 0, 0, 0, 2500];
                arr[25] = ["�����Ź�", 7, 8, 7, 8, 8, 17, 8, 17, 250];
                arr[26] = ["���Ź�", 7, 8, 7, 8, 8, 17, 8, 17, 300];
                arr[27] = ["���Ź�", 7, 8, 7, 8, 8, 17, 8, 17, 500];
                arr[28] = ["�ָŹ�", 8, 9, 8, 9, 8, 17, 8, 17, 400];
                arr[29] = ["�������", 7, 8, 7, 8, 4, 8, 16, 19, 550];
                arr[30] = ["�Ź��㹰", 7, 8, 7, 8, 0, 0, 0, 0, 10];
                arr[31] = ["�������ڸ�", 9, 10, 9, 10, 8, 19, 8, 19, 180];
                arr[32] = ["�����ڸ�", 4, 10, 4, 10, 8, 17, 8, 17, 230];
                arr[33] = ["������ڸ�", 5, 10, 5, 10, 8, 17, 8, 17, 4500];
                arr[34] = ["�����ڸ�", 11, 2, 11, 2, 0, 0, 0, 0, 500];
                arr[35] = ["�ݵ�", 6, 6, 6, 6, 19, 4, 19, 4, 300];
                arr[36] = ["��������", 11, 5, 11, 5, 0, 0, 0, 0, 500];
                arr[37] = ["�ұ�����", 5, 9, 5, 9, 8, 19, 8, 19, 130];
                arr[38] = ["���氳", 5, 9, 5, 9, 8, 19, 8, 19, 800];
                arr[39] = ["���屺", 4, 9, 4, 9, 19, 8, 19, 8, 2000];
                arr[40] = ["�븰��", 3, 10, 3, 10, 0, 0, 0, 0, 120];
                arr[41] = ["�θ�븰��", 3, 10, 3, 10, 19, 8, 19, 8, 1000];
                arr[42] = ["�������", 3, 6, 10, 10, 8, 17, 8, 17, 200];
                arr[43] = ["�������", 2, 10, 2, 10, 0, 0, 0, 0, 1500];
                arr[44] = ["��ܹ���", 4, 8, 4, 8, 0, 0, 0, 0, 2400];
                arr[45] = ["���̿ø�����", 5, 6, 9, 11, 0, 0, 0, 0, 450];
                arr[46] = ["�˶��ϴü�", 0, 0, 0, 0, 0, 0, 0, 0, 350];
                arr[47] = ["�縮�ϴü�", 5, 9, 5, 9, 0, 0, 0, 0, 3000];
                arr[48] = ["�����罺�ٱ���", 7, 8, 7, 8, 0, 0, 0, 0, 800];
                arr[49] = ["��˱���", 12, 2, 12, 2, 0, 0, 0, 0, 3000];
                arr[50] = ["�����ǳ����", 7, 9, 7, 9, 0, 0, 0, 0, 300];
                arr[51] = ["����ǳ����", 7, 8, 7, 8, 23, 8, 23, 8, 10000];
                arr[52] = ["ǳ��", 6, 8, 6, 8, 0, 0, 0, 0, 200];
                arr[53] = ["�񸮾ѿղɹ���", 6, 9, 6, 9, 17, 8, 17, 8, 8000];
                arr[54] = ["��罿����", 7, 8, 7, 8, 0, 0, 0, 0, 2000];
                arr[55] = ["�罿����", 7, 8, 7, 8, 0, 0, 0, 0, 1000];
                arr[56] = ["�ջ罿����", 7, 8, 7, 8, 23, 8, 23, 8, 10000];
                arr[57] = ["�¿������罿����", 6, 9, 6, 9, 19, 8, 19, 8, 6000];
                arr[58] = ["����Ǫ�������罿����", 7, 8, 7, 8, 17, 8, 17, 8, 8000];
                arr[59] = ["Ȳ�ݻ罿����", 7, 8, 7, 8, 17, 8, 17, 8, 12000];
                arr[60] = ["�������罿����", 7, 8, 7, 8, 17, 8, 17, 8, 12000];
                arr[61] = ["���ǳ����", 7, 8, 7, 8, 17, 8, 17, 8, 1350];
                arr[62] = ["��ī�������ǳ����", 7, 8, 7, 8, 17, 8, 17, 8, 8000];
                arr[63] = ["�ڳ������ǳ����", 7, 8, 7, 8, 17, 8, 17, 8, 8000];
                arr[64] = ["���Ŭ�������ǳ����", 7, 8, 7, 8, 17, 8, 17, 8, 12000];
                arr[65] = ["����������", 7, 11, 7, 11, 4, 8, 17, 19, 600];
                arr[66] = ["�ٻ�͹���", 7, 9, 7, 9, 0, 0, 0, 0, 600];
                arr[67] = ["�����̹���", 0, 0, 0, 0, 0, 0, 0, 0, 600];
                arr[68] = ["����", 0, 0, 0, 0, 0, 0, 0, 0, 80];
                arr[69] = ["�Ҷ��", 0, 0, 0, 0, 19, 8, 19, 8, 1000];
                arr[70] = ["������", 0, 0, 0, 0, 0, 0, 0, 0, 200];
                arr[71] = ["�ĸ�", 0, 0, 0, 0, 0, 0, 0, 0, 60];
                arr[72] = ["���", 6, 9, 6, 9, 17, 4, 17, 4, 130];
                arr[73] = ["����", 4, 11, 4, 11, 0, 0, 0, 0, 70];
                arr[74] = ["������", 0, 0, 0, 0, 0, 0, 0, 0, 250];
                arr[75] = ["������", 9, 6, 9, 6, 23, 16, 23, 16, 250];
                arr[76] = ["����", 9, 6, 9, 6, 16, 23, 16, 23, 300];
                arr[77] = ["�Ź�", 0, 0, 0, 0, 19, 8, 19, 8, 600];
                arr[78] = ["Ÿ������", 11, 4, 11, 4, 19, 4, 19, 4, 8000];
                arr[79] = ["����", 5, 10, 5, 10, 19, 4, 19, 4, 8000];
            } else if (data1 == "������") {
                var arr = create2DArray(78, 10);
                arrlength = 78;

                arr[0] = ["���ٰ�", 11, 3, 11, 3, 0, 0, 0, 0, 900];
                arr[1] = ["�Ƕ��", 0, 0, 0, 0, 9, 16, 9, 16, 200];
                arr[2] = ["�ؾ�", 0, 0, 0, 0, 0, 0, 0, 0, 160];
                arr[3] = ["Ȳ��", 0, 0, 0, 0, 16, 9, 16, 9, 240];
                arr[4] = ["�׾�", 0, 0, 0, 0, 0, 0, 0, 0, 300];
                arr[5] = ["����׾�", 0, 0, 0, 0, 16, 9, 16, 9, 4000];
                arr[6] = ["�ݺؾ�", 0, 0, 0, 0, 0, 0, 0, 0, 1300];
                arr[7] = ["Ư���ݺؾ�", 0, 0, 0, 0, 9, 16, 9, 16, 1300];
                arr[8] = ["����", 0, 0, 0, 0, 9, 16, 9, 16, 4500];
                arr[9] = ["�ۻ縮", 4, 8, 4, 8, 0, 0, 0, 0, 300];
                arr[10] = ["����", 4, 9, 4, 9, 0, 0, 0, 0, 200];
                arr[11] = ["�ڶ�", 8, 9, 8, 9, 16, 9, 16, 9, 3750];
                arr[12] = ["����ź�", 4, 10, 4, 10, 21, 4, 21, 4, 5000];
                arr[13] = ["��ì��", 3, 7, 3, 7, 0, 0, 0, 0, 100];
                arr[14] = ["������", 5, 8, 5, 8, 0, 0, 0, 0, 120];
                arr[15] = ["���縮", 0, 0, 0, 0, 16, 9, 16, 9, 400];
                arr[16] = ["�̲ٶ���", 3, 5, 3, 5, 0, 0, 0, 0, 400];
                arr[17] = ["�ޱ�", 5, 10, 5, 10, 16, 9, 16, 9, 800];
                arr[18] = ["����ġ", 6, 8, 6, 8, 9, 16, 9, 16, 5500];
                arr[19] = ["�����", 0, 0, 0, 0, 9, 16, 9, 16, 180];
                arr[20] = ["���ο���ġ", 10, 3, 10, 3, 0, 0, 0, 0, 300];
                arr[21] = ["ū�Թ轺", 0, 0, 0, 0, 0, 0, 0, 0, 400];
                arr[22] = ["ƿ���Ǿ�", 6, 10, 6, 10, 0, 0, 0, 0, 800];
                arr[23] = ["����ġ����", 9, 12, 9, 12, 0, 0, 0, 0, 1800];
                arr[24] = ["����", 12, 2, 12, 2, 0, 0, 0, 0, 500];
                arr[25] = ["����", 7, 9, 7, 9, 0, 0, 0, 0, 900];
                arr[26] = ["�ݼ۾�", 3, 5, 9, 11, 16, 9, 16, 9, 15000];
                arr[27] = ["�Ϻ�����", 12, 3, 12, 3, 16, 9, 16, 9, 15000];
                arr[28] = ["����", 9, 9, 9, 9, 0, 0, 0, 0, 700];
                arr[29] = ["�տ���", 3, 3, 3, 3, 0, 0, 0, 0, 1800];
                arr[30] = ["����", 9, 1, 9, 1, 16, 9, 16, 9, 2000];
                arr[31] = ["����", 4, 1, 4, 1, 9, 16, 9, 16, 1300];
                arr[32] = ["�����ǽ�", 5, 9, 5, 9, 9, 16, 9, 16, 1500];
                arr[33] = ["õ���", 5, 10, 5, 10, 16, 9, 16, 9, 3000];
                arr[34] = ["��Ÿ", 5, 10, 5, 10, 9, 16, 9, 16, 2500];
                arr[35] = ["�׿���Ʈ��", 4, 11, 4, 11, 9, 16, 9, 16, 500];
                arr[36] = ["���κ����ǽ�", 5, 10, 5, 10, 9, 16, 9, 16, 800];
                arr[37] = ["�Ƕ�Ͼ�", 6, 9, 6, 9, 9, 16, 21, 4, 2500];
                arr[38] = ["�Ʒγ���", 6, 9, 6, 9, 16, 9, 16, 9, 10000];
                arr[39] = ["����", 6, 9, 6, 9, 4, 21, 4, 21, 15000];
                arr[40] = ["����", 6, 9, 6, 9, 16, 9, 16, 9, 6000];
                arr[41] = ["�Ƕ����", 6, 9, 6, 9, 16, 9, 16, 9, 10000];
                arr[42] = ["���帮�ɸ�", 6, 9, 6, 9, 21, 4, 21, 4, 4000];
                arr[43] = ["ö�����", 9, 3, 9, 3, 0, 0, 0, 0, 10000];
                arr[44] = ["Ŭ������", 12, 3, 12, 3, 0, 0, 0, 0, 1000];
                arr[45] = ["�ظ�", 4, 11, 4, 11, 0, 0, 0, 0, 1100];
                arr[46] = ["�򵿰���", 4, 9, 4, 9, 0, 0, 0, 0, 650];
                arr[47] = ["������", 4, 9, 4, 9, 0, 0, 0, 0, 1000];
                arr[48] = ["�������", 4, 9, 4, 9, 0, 0, 0, 0, 1000];
                arr[49] = ["���������ǽ�", 7, 8, 7, 8, 4, 21, 4, 21, 10000];
                arr[50] = ["��谨��", 4, 11, 4, 11, 0, 0, 0, 0, 500];
                arr[51] = ["����", 11, 2, 11, 2, 21, 4, 21, 4, 5000];
                arr[52] = ["���ú�", 7, 9, 7, 9, 0, 0, 0, 0, 240];
                arr[53] = ["��ġ", 0, 0, 0, 0, 4, 21, 4, 21, 200];
                arr[54] = ["������", 0, 0, 0, 0, 0, 0, 0, 0, 150];
                arr[55] = ["����", 3, 11, 3, 11, 0, 0, 0, 0, 5000];
                arr[56] = ["���", 0, 0, 0, 0, 0, 0, 0, 0, 400];
                arr[57] = ["����", 0, 0, 0, 0, 0, 0, 0, 0, 3000];
                arr[58] = ["���ڹ�", 10, 4, 10, 4, 0, 0, 0, 0, 300];
                arr[59] = ["��ġ", 0, 0, 0, 0, 0, 0, 0, 0, 800];
                arr[60] = ["��¡��", 12, 8, 12, 8, 0, 0, 0, 0, 500];
                arr[61] = ["��ġ", 8, 10, 8, 10, 0, 0, 0, 0, 2000];
                arr[62] = ["�������", 6, 10, 6, 10, 0, 0, 0, 0, 600];
                arr[63] = ["�ٶ���", 11, 4, 11, 4, 0, 0, 0, 0, 7000];
                arr[64] = ["û��ġ", 7, 9, 11, 4, 0, 0, 0, 0, 10000];
                arr[65] = ["������������", 5, 10, 5, 10, 0, 0, 0, 0, 4500];
                arr[66] = ["������", 5, 10, 5, 10, 0, 0, 0, 0, 6000];
                arr[67] = ["����ġ", 7, 9, 7, 9, 4, 21, 4, 21, 4000];
                arr[68] = ["������", 8, 11, 8, 11, 4, 21, 4, 21, 3000];
                arr[69] = ["����", 6, 9, 6, 9, 16, 9, 16, 9, 12000];
                arr[70] = ["�ͻ��", 6, 9, 6, 9, 16, 9, 16, 9, 8000];
                arr[71] = ["���", 6, 9, 6, 9, 16, 9, 16, 9, 15000];
                arr[72] = ["�������", 6, 9, 6, 9, 0, 0, 0, 0, 13000];
                arr[73] = ["���ǻ��", 6, 9, 6, 9, 0, 0, 0, 0, 1500];
                arr[74] = ["�ʷվƱ�", 11, 3, 11, 3, 16, 9, 16, 9, 2500];
                arr[75] = ["�갥ġ", 12, 5, 12, 5, 0, 0, 0, 0, 9000];
                arr[76] = ["���޴ϱ⽺", 0, 0, 0, 0, 21, 4, 21, 4, 15000];
                arr[77] = ["�Ƿ�ĵ��", 0, 0, 0, 0, 0, 0, 0, 0, 15000];
            }

            for (var i = 0; i < arrlength; i++) {
                var dayflag = 0;
                var timeflag = 0;

                if (data2 == "���ݱ�") {
                    arr[i][1] = south_month(arr[i][1]);
                    arr[i][2] = south_month(arr[i][2]);
                    arr[i][3] = south_month(arr[i][3]);
                    arr[i][4] = south_month(arr[i][4]);
                } else if (data2 != "�Ϲݱ�" && data2 != null) {
                    return;
                }

                if (arr[i][1] > arr[i][2]) {
                    arr[i][2] += 12;
                }
                if (arr[i][3] > arr[i][4]) {
                    arr[i][4] += 12;
                }
                if (arr[i][5] > arr[i][6]) {
                    arr[i][6] += 24;
                }
                if (arr[i][7] > arr[i][8]) {
                    arr[i][8] += 24;
                }
                if (arr[i][1] == 0 || (arr[i][1] <= mon && arr[i][2] >= mon) || (arr[i][1] <= mon2 && arr[i][2] >= mon2) || (arr[i][3] <= mon && arr[i][4] >= mon) || (arr[i][3] <= mon2 && arr[i][4] >= mon2)) {
                    dayflag = 1;
                }
                if (arr[i][5] == 0 || (arr[i][5] <= hour && arr[i][6] > hour) || (arr[i][5] <= hour2 && arr[i][6] > hour2) || (arr[i][7] <= hour && arr[i][8] > hour) || (arr[i][7] <= hour2 && arr[i][8] > hour2)) {
                    timeflag = 1;
                }

                if (timeflag == 1 && dayflag == 1) {
                    arr2.push(arr[i][0]);
                    arr3.push(arr[i][9]);
                }
            }

            if (data1 == "������" && (data2 == "�Ϲݱ�" || data2 == null)) {
                if ((mon >= 3 && mon <= 6) && (hour >= 16 || hour < 9)) {
                    arr2.push("��õ��");
                    arr3.push(1000);
                    arr2.push("�����");
                    arr3.push(3800);
                }
                if (mon >= 9 && mon <= 11) {
                    arr2.push("��õ��");
                    arr3.push(1000);
                    arr2.push("�����");
                    arr3.push(3800);
                }
            }
            if (data1 == "������" && data2 == "���ݱ�") {
                if ((mon >= 9 && mon <= 12) && (hour >= 16 || hour < 9)) {
                    arr2.push("��õ��");
                    arr3.push(1000);
                    arr2.push("�����");
                    arr3.push(3800);
                }
                if (mon >= 3 && mon <= 5) {
                    arr2.push("��õ��");
                    arr3.push(1000);
                    arr2.push("�����");
                    arr3.push(3800);
                }
            }

            for (var j = 0; j < arr2.length; j++) {
                var list = list + "\n" + arr2[j] + " : " + addComma(arr3[j]) + "��";
            }

            if (data1 != "�ػ깰" && data1 != "������" && data1 != "����") {
                return;
            }

            if (data2 == null) {
                replier.reply(mon + "�� " + day + "�� " + hour + "�� " + min + "��\n��ȹ ���� " + data1 + " ���\n" + "(�Ϲݱ� ����)\n" + list);
            } else {
                replier.reply(mon + "�� " + day + "�� " + hour + "�� " + min + "��\n��ȹ ���� " + data1 + " ���\n" + "(" + data2 + " ����)\n" + list);
            }
        }
    }
}