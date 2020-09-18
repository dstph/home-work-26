let tags = '<div></div><span></span><header id="rap"></header><footer class="hip_hop"></footer><img src="" alt=""><a href=""></a><div data-id=""></div><section data-id=""></section>';

let tagsWithoutAtributes = tags.match(/<\w*\b><\/\w*\b>/g);
console.log(tagsWithoutAtributes);
 
let tagWithAttr = tags.match(/<\w* \w*="\w*"><\/\w*\b>/g);
console.log(tagWithAttr);

let tagDataId = tags.match(/<\w* data-id="\w*"><\/\w*\b>/g);
console.log(tagDataId);