function OnPressMeSimpleMoo() {
    var args = new Object();
    args.stuff = 'Terminator';

    var req = new Request.JSON({
        url: '/home/savestuff',
        method: 'POST',
        onSuccess: OnSuccessMoo,
        onFailure: OnFailureMoo,
        data: args
    });

//    req.setHeader('Content-Type', 'application/json; charset=utf-8');
//    req.post(JSON.encode(args));

    req.send();
}

function OnPressMeComplexMoo() {
    var args = new Object();
    args.Name = 'Vince';
    args.Age = 23;
    args.Address = new Object();
    args.Address.Street = '321 E 90TH ST APT 2B';
    args.Address.City = 'New York';
    args.Address.State = 'NY';
    args.Address.Country = 'USA';

    var req = new Request.JSON({
        url: '/home/savecomplexstuff',
        method: 'POST',
        onSuccess: OnSuccessMoo,
        onFailure: OnFailureMoo,
        urlEncoded: false
    });

    req.setHeader('Content-Type', 'application/json; charset=utf-8');

    req.send(JSON.encode(args));
}

function OnPressMeListMoo() {
    var args = new Object();

    args.listOfStuff = [];
    args.listOfStuff[0] = "Ken";
    args.listOfStuff[1] = "Jaspreet";
    args.listOfStuff[2] = "Vince";

    var req = new Request.JSON({
        url: '/home/savealistofstuff',
        method: 'POST',
        onSuccess: OnSuccessMoo,
        onFailure: OnFailureMoo,
        urlEncoded: false
    });

    req.setHeader('Content-Type', 'application/json; charset=utf-8');

    req.send(JSON.encode(args));
}

function OnSuccessMoo(data1, data2, data3) {
    alert('Moo: ' + data1);
}

function OnFailureMoo(data1, data2, data3) {
    alert('Moo: ' + data1);
}