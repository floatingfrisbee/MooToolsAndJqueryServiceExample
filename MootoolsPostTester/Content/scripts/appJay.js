function OnPressMeSimpleJay() {
    var args = new Object();
    args.stuff = 'Write Less Do More';

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
    args.Address.Street = '45 W 43TH ST APT E';
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
    args.listOfStuff[0] = "John Resig";
    args.listOfStuff[1] = "Leah Silber";
    args.listOfStuff[2] = "Adam Sontag";

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
    alert('JayQ: ' + data1.Message);
}

function OnFailureJay(data1, data2, data3) {
    alert('JayQ: ' + data1);
}