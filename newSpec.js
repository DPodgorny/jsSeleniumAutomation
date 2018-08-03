describe('Main Page', function() {

    it('should load correctly', function() {
        browser.get('https://angularjs.org');
        expect(element(by.css("img[alt='AngularJS']")).isPresent());
    })

    it('should show test-entered name', function() {

        element(by.css("input[ng-model='yourName']")).sendKeys('Denis');
        expect(element(by.css("div[app-run='hello.html'] h1")).getText()).toEqual('Hello Denis!');
    })

})


/*
.then(element(by.css("div[class='l-gh__search'] button[class='l-search__toggle']")).click())
.then(element(by.css("input[type='search']")).sendKeys('Ninjago'))
.then(element(by.css("button[type='submit']")).click())
.then(()=>{return browser.wait(element(by.css("a[href='shop.lego.com/en-US/Lloyd-Spinjitzu-Master-70628'] span")).isPresent(), 200000);});

//expect(element(by.css("a[href='shop.lego.com/en-US/Lloyd-Spinjitzu-Master-70628'] span")).isPresent());
})
})
*/
/*
expect(element(by.css("svg[class='l-logo__img']")).isPresent());
});

it('should have search field', function () {

browser.wait(() => {return element(by.css("div[class='l-gh__search'] button[class='l-search__toggle']")).isPresent()}, 200000)
.then(() => {
    return element(by.css("div[class='l-gh__search'] button[class='l-search__toggle']")).click()
})
;
//expect(element(by.css("input[class='l-search__input' type='search']")).isPresent());
});
it('should perform search', function (){

element(by.css("input[class='l-search__input' type='search']")).sendKeys('Ninjago')
.then(()=> {
    element(by.css("button[type='submit'")).click();})
});
})*/
/*.then(browser.wait(() =>{
    return element(by.css("input[class='l-search__input'")).isPresent();
}, 200000));
//.then(expect(element(by.css("input[class='l-search__input'")).isPresent()));
});
it('should perform search', function () {
element(by.css("input[class='l-search__input'")).sendKeys('Ninjago')
.then(function () {
    element(by.css("button[type='submit'")).click();
})
});
});*/



/*
    element(by.css("div[class='l-gh__search'] button[class='l-search__toggle']")).click();
    browser.wait(() =>{
        return element(by.css("input[class='l-search__input'")).isPresent();
    }, 200000);
    element(by.css("input[class='l-search__input'")).sendKeys('Ninjago');
    element(by.css("button[type='submit'"));
    var element1 = element(by.css("a[href='shop.lego.com/en-US/Lloyd-Spinjitzu-Master-70628'] span"));

    expect(element1.getText()).toEqual('Lloyd - Spinjitzu Master');
})
});*/

/*describe('todo list', function() {
  var todoList;

  beforeEach(function() {
    browser.get('http://www.angularjs.org');

    todoList = element.all(by.repeater('todo in todoList.todos'));
  });

  it('should list todos', function() {
    expect(todoList.count()).toEqual(2);
    expect(todoList.get(1).getText()).toEqual('build an AngularJS app');
  });

  it('should add a todo', function() {
    var addTodo = element(by.model('todoList.todoText'));
    var addButton = element(by.css('[value="add"]'));

    addTodo.sendKeys('write a protractor test');
    addButton.click();

    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write a protractor test');
  });
});
});
*/