var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_A_1 = new ol.format.GeoJSON();
var features_A_1 = format_A_1.readFeatures(json_A_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_A_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A_1.addFeatures(features_A_1);
var lyr_A_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_A_1, 
                style: style_A_1,
                popuplayertitle: 'Aдминистративные деления',
                interactive: true,
                title: '<img src="styles/legend/A_1.png" /> Aдминистративные деления'
            });
var format_O_2 = new ol.format.GeoJSON();
var features_O_2 = format_O_2.readFeatures(json_O_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_O_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_O_2.addFeatures(features_O_2);
var lyr_O_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_O_2, 
                style: style_O_2,
                popuplayertitle: 'OОПТ',
                interactive: true,
    title: 'OОПТ<br />\
    <img src="styles/legend/O_2_0.png" /> Государственный природный заповедник<br />\
    <img src="styles/legend/O_2_1.png" /> Ботанический памятник природы<br />\
    <img src="styles/legend/O_2_2.png" /> Государственный природный заказник<br />\
    <img src="styles/legend/O_2_3.png" /> Национальный парк<br />\
    <img src="styles/legend/O_2_4.png" /> Охраняемый ландшафт<br />\
    <img src="styles/legend/O_2_5.png" /> Памятник природы<br />\
    <img src="styles/legend/O_2_6.png" /> Природный биологический заказник<br />\
    <img src="styles/legend/O_2_7.png" /> Природный парк<br />\
    <img src="styles/legend/O_2_8.png" /> <br />' });

lyr_ESRIGraydark_0.setVisible(true);lyr_A_1.setVisible(true);lyr_O_2.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_A_1,lyr_O_2];
lyr_A_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_O_2.set('fieldAliases', {'fid': 'fid', 'protection_title': 'ООПТ', 'name': 'Наименование', 'photo': 'Фото', });
lyr_A_1.set('fieldImages', {'fid': '', 'name': '', });
lyr_O_2.set('fieldImages', {'fid': 'TextEdit', 'protection_title': 'TextEdit', 'name': 'TextEdit', 'photo': 'ExternalResource', });
lyr_A_1.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - always visible', });
lyr_O_2.set('fieldLabels', {'fid': 'hidden field', 'protection_title': 'inline label - always visible', 'name': 'inline label - always visible', 'photo': 'inline label - always visible', });
lyr_O_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});