var itemName = document.querySelector("input");
 var searchButton = document.querySelector(".search-btn");

 
 var dryWaste = ['PAPER', 'PLASTICS', 'METAL', 'GLASS', 'RUBBER', 'THERMOCOL', 'STYROFOAM', 'FABRIC', 'LEATHER', 'REXINE', 'WOOD']; 

 var organicWaste = ['FRUITS AND VEGETABLES','EGGSHELLS','COFFEE GROUNDS AND FILTERS','TEA BAGS','NUT SHELLS','SHREDDED NEWSPAPER', 
'CARDBOARD','PAPER','YARD TRIMMINGS','GRASS CLIPPINGS','HOUSEPLANTS','HAY AND STRAW','LEAVES','SAWDUST','WOOD CHIPS','COTTON AND WOOL RAGS', 
'DRYER AND VACUUM CLEANER LINT','HAIR AND FUR','FIREPLACE ASHES']; 

 var hazardousWaste = ['REFRIGERATORS','WASHING MACHINES','COOKERS','MICROWAVES','ELECTRIC FANS','AIR CONDITIONERS','IRONS','TOASTERS', 
'COFFEE MACHINES','HAIR DRYERS','WATCHES','COMPUTERS','LAPTOPS','PRINTERS','MOBILE PHONES','TELEVISIONS','REMOTE CONTROLS', 
'MEDICAL DEVICES','AUTOMATIC DISPENSERS','THERMOSTAT','FLUORESCENT LAMPS','HIGH INTENSITY','DISCHARGE LAMPS','COMPACT FLUORESCENT LAMPS', 
'LEDS','SAWS','SEWING MACHINES','LAWN MOWERS','BATTERIES','ELECTRIC TRAINS AND RACING CARS','HAND-HELD VIDEO GAMES','CONSOLES','AMPLIFIERS', 
'MUSICAL INSTRUMENTS','RADIOS', 'PAINT', 'SOLVENT', 'THERMOMETER', 'COMPUTERS', 'TELIVISION', 'AEROSOL', 'BATTERY', 'AESBESTOS']; 

 var recyclableWaste = ['PAPER', 'PLASTIC', 'PLASTIC BOTTLE','CEREAL BOX','CARDBOARD', 'MAGAZINE','LETTER','NEWSPAPER','ALUMINIUM CAN', 
'TIN CAN', 'FOOD CONTAINER', 'JARS','BEER BOTTLE','LIQUOR BOTTLE']; 

 

 searchButton.addEventListener("click", function(){
    var wasteType = "Item not found";
    var wasteItem = itemName.value.toUpperCase();
    var n = dryWaste.includes(wasteItem);
    if(n){
        wasteType = "Dry Waste";
    }
    n = organicWaste.includes(wasteItem);
    if(n){
        wasteType = "Organic Waste";
    }
    n = hazardousWaste.includes(wasteItem);
    //if(n){
        wasteType = "Hazardous Waste";
    }
    n = recyclableWaste.includes(wasteItem);
    if(n){
        wasteType = "Recyclable waste";
    }
    console.log(wasteType);

    //var tag = document.querySelector("div")[1];
    var tag=document.getElementById("result");
    //tag.textContent = wasteType;

 });
