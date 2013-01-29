﻿function OnPressMeSimpleMoo() {
    var args = new Object();
    args.stuff = 'A Compact JavaScript Framework';

    var req = new Request.JSON({
        url: '/home/savestuff',
        method: 'POST',
        onSuccess: OnSuccessMoo,
        onFailure: OnFailureMoo,
        data: args
    });

    req.send();
}

function OnPressMeComplexMoo() {
    var args = new Object();
    args.Name = 'Vince';
    args.Age = 34;
    args.Address = new Object();
    args.Address.Street = '32 E 23RD ST APT F';
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
    args.listOfStuff[0] = "Christoph Pojer";
    args.listOfStuff[1] = "David Walsh";
    args.listOfStuff[2] = "Darren Waddell";

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

function OnSuccessMoo(result) {
    alert('Moo: ' + result.Message);
}

function OnFailureMoo(result) {
    alert('Moo: ' + result);
}