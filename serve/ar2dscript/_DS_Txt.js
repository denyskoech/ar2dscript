/* Copyright 2016 by Warren E. Downs on behalf of Choggiung Limited.
 * Licensed under the MIT License (MIT)
 */

/** DroidScript Txt emulation **/

/////////////////////////////////////////////////////////////////////////////////

function _DS_Txt(text,width,height,options) {
    this.text=text;
    this.width=width;
    this.height=height;
    this.options=options;
    var h=_createNode('DIV', _newId(this))
    h.css('background',this.backColor='#000000');
    h.css('color',this.textColor='#808080');
    h.html(text);
    this.htmlObj=h;
}

function _DS_Txt_SetTextSize(size,mode) {
    if(parseInt(size) == size) { size += 'pt'; }
    this.htmlObj.css('font-size',this.size=size);
    _rmtSet(this, this.htmlObj.html());
}

function _DS_Txt_SetText(text) {
    //console.log("SetText: this.id="+this.id);
    this.htmlObj.html(text);
    _rmtSet(this, this.htmlObj.html());
}

function _DS_Txt_SetTextColor(color) {
    this.htmlObj.css('color',this.textColor=color);
    _rmtSet(this, this.htmlObj.html());
}