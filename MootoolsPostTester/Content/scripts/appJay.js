function OnPressMeSimpleJay() {
    var args = new Object();
    args.stuff = 'Terminator';

    $.ajax({
        url: '/home/savestuff',
        type: 'POST',
        data: args,
        success: OnSuccessJay,
        error: OnFailureJay
    });
}

function OnPressMeComplexJay() {
    var args = new Object();
    args.Name = 'Vince';
    args.Age = 23;
    args.Address = new Object();
    args.Address.Street = '321 E 90TH ST APT 2B';
    args.Address.City = 'New York';
    args.Address.State = 'NY';
    args.Address.Country = 'USA';

    $.ajax({
        url: '/home/savecomplexstuff',
        type: 'POST',
        data: JSONDC.stringify(args),
        contentType: 'application/json; charset=utf-8',
        success: OnSuccessJay,
        error: OnFailureJay
    });
}

function OnPressMeListJay() {
    var args = new Object();

    args.listOfStuff = [];
    args.listOfStuff[0] = "Ken";
    args.listOfStuff[1] = "Jaspreet";
    args.listOfStuff[2] = "Vince";

    $.ajax({
        url: '/home/savealistofstuff',
        type: 'POST',
        data: JSONDC.stringify(args),
        contentType: 'application/json; charset=utf-8',
        success: OnSuccessJay,
        error: OnFailureJay
    });
}

function OnSuccessJay(data1, data2, data3) {
    alert('JayQ: ' + data1);
}

function OnFailureJay(data1, data2, data3) {
    alert('JayQ: ' + data1);
}