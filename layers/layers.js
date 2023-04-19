var wms_layers = [];


        var lyr_OpenStreetMaps_0 = new ol.layer.Tile({
            'title': 'OpenStreetMaps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_bgn_22pwd_1 = new ol.format.GeoJSON();
var features_bgn_22pwd_1 = format_bgn_22pwd_1.readFeatures(json_bgn_22pwd_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bgn_22pwd_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bgn_22pwd_1.addFeatures(features_bgn_22pwd_1);
var lyr_bgn_22pwd_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bgn_22pwd_1, 
                style: style_bgn_22pwd_1,
                interactive: true,
                title: '<img src="styles/legend/bgn_22pwd_1.png" /> bgn_22pwd'
            });

lyr_OpenStreetMaps_0.setVisible(true);lyr_bgn_22pwd_1.setVisible(true);
var layersList = [lyr_OpenStreetMaps_0,lyr_bgn_22pwd_1];
lyr_bgn_22pwd_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Tema': 'Tema', 'Jenis': 'Jenis', 'Jenis_Bgn': 'Jenis_Bgn', 'Toponim': 'Toponim', });
lyr_bgn_22pwd_1.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Shape_Leng': '', 'Shape_Area': '', 'Tema': '', 'Jenis': '', 'Jenis_Bgn': '', 'Toponim': '', });
lyr_bgn_22pwd_1.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Tema': 'header label', 'Jenis': 'no label', 'Jenis_Bgn': 'no label', 'Toponim': 'no label', });
lyr_bgn_22pwd_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});