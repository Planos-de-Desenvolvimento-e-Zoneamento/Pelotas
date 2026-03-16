ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-5826959.128119, -3735541.737187, -5824088.554442, -3733946.551020]);
var wms_layers = [];


        var lyr_EsriImagery_0 = new ol.layer.Tile({
            'title': 'Esri Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_reasUrbanaseRurais_1 = new ol.format.GeoJSON();
var features_reasUrbanaseRurais_1 = format_reasUrbanaseRurais_1.readFeatures(json_reasUrbanaseRurais_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasUrbanaseRurais_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasUrbanaseRurais_1.addFeatures(features_reasUrbanaseRurais_1);
var lyr_reasUrbanaseRurais_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasUrbanaseRurais_1, 
                style: style_reasUrbanaseRurais_1,
                popuplayertitle: 'Áreas Urbanas e Rurais',
                interactive: true,
                title: '<img src="styles/legend/reasUrbanaseRurais_1.png" /> Áreas Urbanas e Rurais'
            });
var format_FundeadourosLongoPrazo_2 = new ol.format.GeoJSON();
var features_FundeadourosLongoPrazo_2 = format_FundeadourosLongoPrazo_2.readFeatures(json_FundeadourosLongoPrazo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FundeadourosLongoPrazo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosLongoPrazo_2.addFeatures(features_FundeadourosLongoPrazo_2);
var lyr_FundeadourosLongoPrazo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosLongoPrazo_2, 
                style: style_FundeadourosLongoPrazo_2,
                popuplayertitle: 'Fundeadouros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosLongoPrazo_2.png" /> Fundeadouros - Longo Prazo '
            });
var format_FundeadourosMdioPrazo_3 = new ol.format.GeoJSON();
var features_FundeadourosMdioPrazo_3 = format_FundeadourosMdioPrazo_3.readFeatures(json_FundeadourosMdioPrazo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FundeadourosMdioPrazo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosMdioPrazo_3.addFeatures(features_FundeadourosMdioPrazo_3);
var lyr_FundeadourosMdioPrazo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosMdioPrazo_3, 
                style: style_FundeadourosMdioPrazo_3,
                popuplayertitle: 'Fundeadouros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosMdioPrazo_3.png" /> Fundeadouros - Médio Prazo '
            });
var format_FundeadourosCurtoPrazo_4 = new ol.format.GeoJSON();
var features_FundeadourosCurtoPrazo_4 = format_FundeadourosCurtoPrazo_4.readFeatures(json_FundeadourosCurtoPrazo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FundeadourosCurtoPrazo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosCurtoPrazo_4.addFeatures(features_FundeadourosCurtoPrazo_4);
var lyr_FundeadourosCurtoPrazo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosCurtoPrazo_4, 
                style: style_FundeadourosCurtoPrazo_4,
                popuplayertitle: 'Fundeadouros - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosCurtoPrazo_4.png" /> Fundeadouros - Curto Prazo '
            });
var format_FundeadourosSituaoAtual_5 = new ol.format.GeoJSON();
var features_FundeadourosSituaoAtual_5 = format_FundeadourosSituaoAtual_5.readFeatures(json_FundeadourosSituaoAtual_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FundeadourosSituaoAtual_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosSituaoAtual_5.addFeatures(features_FundeadourosSituaoAtual_5);
var lyr_FundeadourosSituaoAtual_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosSituaoAtual_5, 
                style: style_FundeadourosSituaoAtual_5,
                popuplayertitle: 'Fundeadouros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosSituaoAtual_5.png" /> Fundeadouros - Situação Atual '
            });
var format_BaciasdeEvoluoLongoPrazo_6 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoLongoPrazo_6 = format_BaciasdeEvoluoLongoPrazo_6.readFeatures(json_BaciasdeEvoluoLongoPrazo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaciasdeEvoluoLongoPrazo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoLongoPrazo_6.addFeatures(features_BaciasdeEvoluoLongoPrazo_6);
var lyr_BaciasdeEvoluoLongoPrazo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoLongoPrazo_6, 
                style: style_BaciasdeEvoluoLongoPrazo_6,
                popuplayertitle: 'Bacias de Evolução - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoLongoPrazo_6.png" /> Bacias de Evolução - Longo Prazo '
            });
var format_BaciasdeEvoluoMdioPrazo_7 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoMdioPrazo_7 = format_BaciasdeEvoluoMdioPrazo_7.readFeatures(json_BaciasdeEvoluoMdioPrazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaciasdeEvoluoMdioPrazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoMdioPrazo_7.addFeatures(features_BaciasdeEvoluoMdioPrazo_7);
var lyr_BaciasdeEvoluoMdioPrazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoMdioPrazo_7, 
                style: style_BaciasdeEvoluoMdioPrazo_7,
                popuplayertitle: 'Bacias de Evolução - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoMdioPrazo_7.png" /> Bacias de Evolução - Médio Prazo '
            });
var format_BaciasdeEvoluoCurtoPrazo_8 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoCurtoPrazo_8 = format_BaciasdeEvoluoCurtoPrazo_8.readFeatures(json_BaciasdeEvoluoCurtoPrazo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaciasdeEvoluoCurtoPrazo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoCurtoPrazo_8.addFeatures(features_BaciasdeEvoluoCurtoPrazo_8);
var lyr_BaciasdeEvoluoCurtoPrazo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoCurtoPrazo_8, 
                style: style_BaciasdeEvoluoCurtoPrazo_8,
                popuplayertitle: 'Bacias de Evolução - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoCurtoPrazo_8.png" /> Bacias de Evolução - Curto Prazo '
            });
var format_BaciasdeEvoluoSituaoAtual_9 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoSituaoAtual_9 = format_BaciasdeEvoluoSituaoAtual_9.readFeatures(json_BaciasdeEvoluoSituaoAtual_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaciasdeEvoluoSituaoAtual_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoSituaoAtual_9.addFeatures(features_BaciasdeEvoluoSituaoAtual_9);
var lyr_BaciasdeEvoluoSituaoAtual_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoSituaoAtual_9, 
                style: style_BaciasdeEvoluoSituaoAtual_9,
                popuplayertitle: 'Bacias de Evolução - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoSituaoAtual_9.png" /> Bacias de Evolução - Situação Atual '
            });
var format_CanaisdeAcessoLongoPrazo_10 = new ol.format.GeoJSON();
var features_CanaisdeAcessoLongoPrazo_10 = format_CanaisdeAcessoLongoPrazo_10.readFeatures(json_CanaisdeAcessoLongoPrazo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanaisdeAcessoLongoPrazo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoLongoPrazo_10.addFeatures(features_CanaisdeAcessoLongoPrazo_10);
var lyr_CanaisdeAcessoLongoPrazo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoLongoPrazo_10, 
                style: style_CanaisdeAcessoLongoPrazo_10,
                popuplayertitle: 'Canais de Acesso - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoLongoPrazo_10.png" /> Canais de Acesso - Longo Prazo '
            });
var format_CanaisdeAcessoMdioPrazo_11 = new ol.format.GeoJSON();
var features_CanaisdeAcessoMdioPrazo_11 = format_CanaisdeAcessoMdioPrazo_11.readFeatures(json_CanaisdeAcessoMdioPrazo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanaisdeAcessoMdioPrazo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoMdioPrazo_11.addFeatures(features_CanaisdeAcessoMdioPrazo_11);
var lyr_CanaisdeAcessoMdioPrazo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoMdioPrazo_11, 
                style: style_CanaisdeAcessoMdioPrazo_11,
                popuplayertitle: 'Canais de Acesso - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoMdioPrazo_11.png" /> Canais de Acesso - Médio Prazo '
            });
var format_CanaisdeAcessoCurtoPrazo_12 = new ol.format.GeoJSON();
var features_CanaisdeAcessoCurtoPrazo_12 = format_CanaisdeAcessoCurtoPrazo_12.readFeatures(json_CanaisdeAcessoCurtoPrazo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanaisdeAcessoCurtoPrazo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoCurtoPrazo_12.addFeatures(features_CanaisdeAcessoCurtoPrazo_12);
var lyr_CanaisdeAcessoCurtoPrazo_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoCurtoPrazo_12, 
                style: style_CanaisdeAcessoCurtoPrazo_12,
                popuplayertitle: 'Canais de Acesso - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoCurtoPrazo_12.png" /> Canais de Acesso - Curto Prazo '
            });
var format_CanaisdeAcessoSituaoAtual_13 = new ol.format.GeoJSON();
var features_CanaisdeAcessoSituaoAtual_13 = format_CanaisdeAcessoSituaoAtual_13.readFeatures(json_CanaisdeAcessoSituaoAtual_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanaisdeAcessoSituaoAtual_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoSituaoAtual_13.addFeatures(features_CanaisdeAcessoSituaoAtual_13);
var lyr_CanaisdeAcessoSituaoAtual_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoSituaoAtual_13, 
                style: style_CanaisdeAcessoSituaoAtual_13,
                popuplayertitle: 'Canais de Acesso - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoSituaoAtual_13.png" /> Canais de Acesso - Situação Atual '
            });
var format_AcessosHidroviriosExternos_14 = new ol.format.GeoJSON();
var features_AcessosHidroviriosExternos_14 = format_AcessosHidroviriosExternos_14.readFeatures(json_AcessosHidroviriosExternos_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosHidroviriosExternos_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosHidroviriosExternos_14.addFeatures(features_AcessosHidroviriosExternos_14);
var lyr_AcessosHidroviriosExternos_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosHidroviriosExternos_14, 
                style: style_AcessosHidroviriosExternos_14,
                popuplayertitle: 'Acessos Hidroviários Externos',
                interactive: true,
                title: '<img src="styles/legend/AcessosHidroviriosExternos_14.png" /> Acessos Hidroviários Externos'
            });
var format_AcessosFerroviriosExternos_15 = new ol.format.GeoJSON();
var features_AcessosFerroviriosExternos_15 = format_AcessosFerroviriosExternos_15.readFeatures(json_AcessosFerroviriosExternos_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosFerroviriosExternos_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosExternos_15.addFeatures(features_AcessosFerroviriosExternos_15);
var lyr_AcessosFerroviriosExternos_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosExternos_15, 
                style: style_AcessosFerroviriosExternos_15,
                popuplayertitle: 'Acessos Ferroviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosExternos_15.png" /> Acessos Ferroviários Externos '
            });
var format_AcessosRodoviriosInternosLongoPrazo_16 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosLongoPrazo_16 = format_AcessosRodoviriosInternosLongoPrazo_16.readFeatures(json_AcessosRodoviriosInternosLongoPrazo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosRodoviriosInternosLongoPrazo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosLongoPrazo_16.addFeatures(features_AcessosRodoviriosInternosLongoPrazo_16);
var lyr_AcessosRodoviriosInternosLongoPrazo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosLongoPrazo_16, 
                style: style_AcessosRodoviriosInternosLongoPrazo_16,
                popuplayertitle: 'Acessos Rodoviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosLongoPrazo_16.png" /> Acessos Rodoviários Internos - Longo Prazo '
            });
var format_AcessosRodoviriosInternosMdioPrazo_17 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosMdioPrazo_17 = format_AcessosRodoviriosInternosMdioPrazo_17.readFeatures(json_AcessosRodoviriosInternosMdioPrazo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosRodoviriosInternosMdioPrazo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosMdioPrazo_17.addFeatures(features_AcessosRodoviriosInternosMdioPrazo_17);
var lyr_AcessosRodoviriosInternosMdioPrazo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosMdioPrazo_17, 
                style: style_AcessosRodoviriosInternosMdioPrazo_17,
                popuplayertitle: 'Acessos Rodoviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosMdioPrazo_17.png" /> Acessos Rodoviários Internos - Médio Prazo '
            });
var format_AcessosRodoviriosInternosCurtoPrazo_18 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosCurtoPrazo_18 = format_AcessosRodoviriosInternosCurtoPrazo_18.readFeatures(json_AcessosRodoviriosInternosCurtoPrazo_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosRodoviriosInternosCurtoPrazo_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosCurtoPrazo_18.addFeatures(features_AcessosRodoviriosInternosCurtoPrazo_18);
var lyr_AcessosRodoviriosInternosCurtoPrazo_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosCurtoPrazo_18, 
                style: style_AcessosRodoviriosInternosCurtoPrazo_18,
                popuplayertitle: 'Acessos Rodoviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosCurtoPrazo_18.png" /> Acessos Rodoviários Internos - Curto Prazo '
            });
var format_AcessosRodoviriosInternosSituaoAtual_19 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosSituaoAtual_19 = format_AcessosRodoviriosInternosSituaoAtual_19.readFeatures(json_AcessosRodoviriosInternosSituaoAtual_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosRodoviriosInternosSituaoAtual_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosSituaoAtual_19.addFeatures(features_AcessosRodoviriosInternosSituaoAtual_19);
var lyr_AcessosRodoviriosInternosSituaoAtual_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosSituaoAtual_19, 
                style: style_AcessosRodoviriosInternosSituaoAtual_19,
                popuplayertitle: 'Acessos Rodoviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosSituaoAtual_19.png" /> Acessos Rodoviários Internos - Situação Atual '
            });
var format_AcessosRodoviriosExternos_20 = new ol.format.GeoJSON();
var features_AcessosRodoviriosExternos_20 = format_AcessosRodoviriosExternos_20.readFeatures(json_AcessosRodoviriosExternos_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosRodoviriosExternos_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosExternos_20.addFeatures(features_AcessosRodoviriosExternos_20);
var lyr_AcessosRodoviriosExternos_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosExternos_20, 
                style: style_AcessosRodoviriosExternos_20,
                popuplayertitle: 'Acessos Rodoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosExternos_20.png" /> Acessos Rodoviários Externos '
            });
var format_reaseInstalaesAlfandegadas_21 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadas_21 = format_reaseInstalaesAlfandegadas_21.readFeatures(json_reaseInstalaesAlfandegadas_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaseInstalaesAlfandegadas_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadas_21.addFeatures(features_reaseInstalaesAlfandegadas_21);
var lyr_reaseInstalaesAlfandegadas_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadas_21, 
                style: style_reaseInstalaesAlfandegadas_21,
                popuplayertitle: 'Áreas e Instalações Alfandegadas ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadas_21.png" /> Áreas e Instalações Alfandegadas '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_22 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_22 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_22.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_22.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_22);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_22, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_22,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_22.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo'
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_23 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_23 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_23.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_23.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_23);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_23, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_23,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_23.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo'
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_24 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_24 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_24.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_24.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_24);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_24, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_24,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_24.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo'
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_25 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_25 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_25.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_25.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_25);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_25, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_25,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_25.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual'
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_26 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_26 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_26.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_26.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_26);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_26, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_26,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_26.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo'
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo'
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_28 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_28 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_28.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_28.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_28);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_28, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_28,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_28.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo'
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_29 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_29 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_29.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_29.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_29);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_29, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_29,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_29.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual'
            });
var format_reasNoAfetassOperaesPorturiasLongoPrazo_30 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasLongoPrazo_30 = format_reasNoAfetassOperaesPorturiasLongoPrazo_30.readFeatures(json_reasNoAfetassOperaesPorturiasLongoPrazo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_30.addFeatures(features_reasNoAfetassOperaesPorturiasLongoPrazo_30);
var lyr_reasNoAfetassOperaesPorturiasLongoPrazo_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_30, 
                style: style_reasNoAfetassOperaesPorturiasLongoPrazo_30,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasLongoPrazo_30.png" /> Áreas Não Afetas às Operações Portuárias - Longo Prazo'
            });
var format_reasNoAfetassOperaesPorturiasMdioPrazo_31 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasMdioPrazo_31 = format_reasNoAfetassOperaesPorturiasMdioPrazo_31.readFeatures(json_reasNoAfetassOperaesPorturiasMdioPrazo_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_31.addFeatures(features_reasNoAfetassOperaesPorturiasMdioPrazo_31);
var lyr_reasNoAfetassOperaesPorturiasMdioPrazo_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_31, 
                style: style_reasNoAfetassOperaesPorturiasMdioPrazo_31,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasMdioPrazo_31.png" /> Áreas Não Afetas às Operações Portuárias - Médio Prazo'
            });
var format_reasNoAfetassOperaesPorturiasCurtoPrazo_32 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasCurtoPrazo_32 = format_reasNoAfetassOperaesPorturiasCurtoPrazo_32.readFeatures(json_reasNoAfetassOperaesPorturiasCurtoPrazo_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_32.addFeatures(features_reasNoAfetassOperaesPorturiasCurtoPrazo_32);
var lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_32, 
                style: style_reasNoAfetassOperaesPorturiasCurtoPrazo_32,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasCurtoPrazo_32.png" /> Áreas Não Afetas às Operações Portuárias - Curto Prazo'
            });
var format_reasNoAfetassOperaesPorturiasSituaoAtual_33 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasSituaoAtual_33 = format_reasNoAfetassOperaesPorturiasSituaoAtual_33.readFeatures(json_reasNoAfetassOperaesPorturiasSituaoAtual_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_33.addFeatures(features_reasNoAfetassOperaesPorturiasSituaoAtual_33);
var lyr_reasNoAfetassOperaesPorturiasSituaoAtual_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_33, 
                style: style_reasNoAfetassOperaesPorturiasSituaoAtual_33,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasSituaoAtual_33.png" /> Áreas Não Afetas às Operações Portuárias - Situação Atual'
            });
var format_AcostagemLongoPrazo_34 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_34 = format_AcostagemLongoPrazo_34.readFeatures(json_AcostagemLongoPrazo_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcostagemLongoPrazo_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_34.addFeatures(features_AcostagemLongoPrazo_34);
var lyr_AcostagemLongoPrazo_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_34, 
                style: style_AcostagemLongoPrazo_34,
                popuplayertitle: 'Acostagem - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_34.png" /> Acostagem - Longo Prazo'
            });
var format_AcostagemMdioPrazo_35 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_35 = format_AcostagemMdioPrazo_35.readFeatures(json_AcostagemMdioPrazo_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcostagemMdioPrazo_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_35.addFeatures(features_AcostagemMdioPrazo_35);
var lyr_AcostagemMdioPrazo_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_35, 
                style: style_AcostagemMdioPrazo_35,
                popuplayertitle: 'Acostagem - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_35.png" /> Acostagem - Médio Prazo'
            });
var format_AcostagemCurtoPrazo_36 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_36 = format_AcostagemCurtoPrazo_36.readFeatures(json_AcostagemCurtoPrazo_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcostagemCurtoPrazo_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_36.addFeatures(features_AcostagemCurtoPrazo_36);
var lyr_AcostagemCurtoPrazo_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_36, 
                style: style_AcostagemCurtoPrazo_36,
                popuplayertitle: 'Acostagem - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_36.png" /> Acostagem - Curto Prazo'
            });
var format_AcostagemSituaoAtual_37 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_37 = format_AcostagemSituaoAtual_37.readFeatures(json_AcostagemSituaoAtual_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcostagemSituaoAtual_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_37.addFeatures(features_AcostagemSituaoAtual_37);
var lyr_AcostagemSituaoAtual_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_37, 
                style: style_AcostagemSituaoAtual_37,
                popuplayertitle: 'Acostagem - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_37.png" /> Acostagem - Situação Atual'
            });
var format_ArmazenagemLongoPrazo_38 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_38 = format_ArmazenagemLongoPrazo_38.readFeatures(json_ArmazenagemLongoPrazo_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArmazenagemLongoPrazo_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_38.addFeatures(features_ArmazenagemLongoPrazo_38);
var lyr_ArmazenagemLongoPrazo_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_38, 
                style: style_ArmazenagemLongoPrazo_38,
                popuplayertitle: 'Armazenagem - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_38.png" /> Armazenagem - Longo Prazo'
            });
var format_ArmazenagemMdioPrazo_39 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_39 = format_ArmazenagemMdioPrazo_39.readFeatures(json_ArmazenagemMdioPrazo_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArmazenagemMdioPrazo_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_39.addFeatures(features_ArmazenagemMdioPrazo_39);
var lyr_ArmazenagemMdioPrazo_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_39, 
                style: style_ArmazenagemMdioPrazo_39,
                popuplayertitle: 'Armazenagem - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_39.png" /> Armazenagem - Médio Prazo'
            });
var format_ArmazenagemCurtoPrazo_40 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_40 = format_ArmazenagemCurtoPrazo_40.readFeatures(json_ArmazenagemCurtoPrazo_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArmazenagemCurtoPrazo_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_40.addFeatures(features_ArmazenagemCurtoPrazo_40);
var lyr_ArmazenagemCurtoPrazo_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_40, 
                style: style_ArmazenagemCurtoPrazo_40,
                popuplayertitle: 'Armazenagem - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_40.png" /> Armazenagem - Curto Prazo'
            });
var format_ArmazenagemSituaoAtual_41 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_41 = format_ArmazenagemSituaoAtual_41.readFeatures(json_ArmazenagemSituaoAtual_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArmazenagemSituaoAtual_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_41.addFeatures(features_ArmazenagemSituaoAtual_41);
var lyr_ArmazenagemSituaoAtual_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_41, 
                style: style_ArmazenagemSituaoAtual_41,
                popuplayertitle: 'Armazenagem - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_41.png" /> Armazenagem - Situação Atual'
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo'
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo'
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo'
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual'
            });
var format_reasAfetassOperaesPorturiasdeUsoPblicoLongoPrazo_46 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasdeUsoPblicoLongoPrazo_46 = format_reasAfetassOperaesPorturiasdeUsoPblicoLongoPrazo_46.readFeatures(json_reasAfetassOperaesPorturiasdeUsoPblicoLongoPrazo_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasdeUsoPblicoLongoPrazo_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasdeUsoPblicoLongoPrazo_46.addFeatures(features_reasAfetassOperaesPorturiasdeUsoPblicoLongoPrazo_46);
var lyr_reasAfetassOperaesPorturiasdeUsoPblicoLongoPrazo_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasdeUsoPblicoLongoPrazo_46, 
                style: style_reasAfetassOperaesPorturiasdeUsoPblicoLongoPrazo_46,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias de Uso Público - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasdeUsoPblicoLongoPrazo_46.png" /> Áreas Afetas às Operações Portuárias de Uso Público - Longo Prazo'
            });
var format_reasAfetassOperaesPorturiasdeUsoPblicoMdioPrazo_47 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasdeUsoPblicoMdioPrazo_47 = format_reasAfetassOperaesPorturiasdeUsoPblicoMdioPrazo_47.readFeatures(json_reasAfetassOperaesPorturiasdeUsoPblicoMdioPrazo_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasdeUsoPblicoMdioPrazo_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasdeUsoPblicoMdioPrazo_47.addFeatures(features_reasAfetassOperaesPorturiasdeUsoPblicoMdioPrazo_47);
var lyr_reasAfetassOperaesPorturiasdeUsoPblicoMdioPrazo_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasdeUsoPblicoMdioPrazo_47, 
                style: style_reasAfetassOperaesPorturiasdeUsoPblicoMdioPrazo_47,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias de Uso Público - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasdeUsoPblicoMdioPrazo_47.png" /> Áreas Afetas às Operações Portuárias de Uso Público - Médio Prazo'
            });
var format_reasAfetassOperaesPorturiasdeUsoPblicoCurtoPrazo_48 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasdeUsoPblicoCurtoPrazo_48 = format_reasAfetassOperaesPorturiasdeUsoPblicoCurtoPrazo_48.readFeatures(json_reasAfetassOperaesPorturiasdeUsoPblicoCurtoPrazo_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasdeUsoPblicoCurtoPrazo_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasdeUsoPblicoCurtoPrazo_48.addFeatures(features_reasAfetassOperaesPorturiasdeUsoPblicoCurtoPrazo_48);
var lyr_reasAfetassOperaesPorturiasdeUsoPblicoCurtoPrazo_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasdeUsoPblicoCurtoPrazo_48, 
                style: style_reasAfetassOperaesPorturiasdeUsoPblicoCurtoPrazo_48,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias de Uso Público - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasdeUsoPblicoCurtoPrazo_48.png" /> Áreas Afetas às Operações Portuárias de Uso Público - Curto Prazo'
            });
var format_reasAfetassOperaesPorturiasdeUsoPblicoSituaoAtual_49 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasdeUsoPblicoSituaoAtual_49 = format_reasAfetassOperaesPorturiasdeUsoPblicoSituaoAtual_49.readFeatures(json_reasAfetassOperaesPorturiasdeUsoPblicoSituaoAtual_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasdeUsoPblicoSituaoAtual_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasdeUsoPblicoSituaoAtual_49.addFeatures(features_reasAfetassOperaesPorturiasdeUsoPblicoSituaoAtual_49);
var lyr_reasAfetassOperaesPorturiasdeUsoPblicoSituaoAtual_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasdeUsoPblicoSituaoAtual_49, 
                style: style_reasAfetassOperaesPorturiasdeUsoPblicoSituaoAtual_49,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias de Uso Público - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasdeUsoPblicoSituaoAtual_49.png" /> Áreas Afetas às Operações Portuárias de Uso Público - Situação Atual'
            });
var format_reasAfetassOperaesPorturiascomServidodePassagemLongoPrazo_50 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiascomServidodePassagemLongoPrazo_50 = format_reasAfetassOperaesPorturiascomServidodePassagemLongoPrazo_50.readFeatures(json_reasAfetassOperaesPorturiascomServidodePassagemLongoPrazo_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiascomServidodePassagemLongoPrazo_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiascomServidodePassagemLongoPrazo_50.addFeatures(features_reasAfetassOperaesPorturiascomServidodePassagemLongoPrazo_50);
var lyr_reasAfetassOperaesPorturiascomServidodePassagemLongoPrazo_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiascomServidodePassagemLongoPrazo_50, 
                style: style_reasAfetassOperaesPorturiascomServidodePassagemLongoPrazo_50,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias com Servidão de Passagem - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiascomServidodePassagemLongoPrazo_50.png" /> Áreas Afetas às Operações Portuárias com Servidão de Passagem - Longo Prazo'
            });
var format_reasAfetassOperaesPorturiascomServidodePassagemMdioPrazo_51 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiascomServidodePassagemMdioPrazo_51 = format_reasAfetassOperaesPorturiascomServidodePassagemMdioPrazo_51.readFeatures(json_reasAfetassOperaesPorturiascomServidodePassagemMdioPrazo_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiascomServidodePassagemMdioPrazo_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiascomServidodePassagemMdioPrazo_51.addFeatures(features_reasAfetassOperaesPorturiascomServidodePassagemMdioPrazo_51);
var lyr_reasAfetassOperaesPorturiascomServidodePassagemMdioPrazo_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiascomServidodePassagemMdioPrazo_51, 
                style: style_reasAfetassOperaesPorturiascomServidodePassagemMdioPrazo_51,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias com Servidão de Passagem - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiascomServidodePassagemMdioPrazo_51.png" /> Áreas Afetas às Operações Portuárias com Servidão de Passagem - Médio Prazo'
            });
var format_reasAfetassOperaesPorturiascomServidodePassagemCurtoPrazo_52 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiascomServidodePassagemCurtoPrazo_52 = format_reasAfetassOperaesPorturiascomServidodePassagemCurtoPrazo_52.readFeatures(json_reasAfetassOperaesPorturiascomServidodePassagemCurtoPrazo_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiascomServidodePassagemCurtoPrazo_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiascomServidodePassagemCurtoPrazo_52.addFeatures(features_reasAfetassOperaesPorturiascomServidodePassagemCurtoPrazo_52);
var lyr_reasAfetassOperaesPorturiascomServidodePassagemCurtoPrazo_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiascomServidodePassagemCurtoPrazo_52, 
                style: style_reasAfetassOperaesPorturiascomServidodePassagemCurtoPrazo_52,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias com Servidão de Passagem - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiascomServidodePassagemCurtoPrazo_52.png" /> Áreas Afetas às Operações Portuárias com Servidão de Passagem - Curto Prazo'
            });
var format_reasAfetassOperaesPorturiascomServidodePassagemSituaoAtual_53 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiascomServidodePassagemSituaoAtual_53 = format_reasAfetassOperaesPorturiascomServidodePassagemSituaoAtual_53.readFeatures(json_reasAfetassOperaesPorturiascomServidodePassagemSituaoAtual_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiascomServidodePassagemSituaoAtual_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiascomServidodePassagemSituaoAtual_53.addFeatures(features_reasAfetassOperaesPorturiascomServidodePassagemSituaoAtual_53);
var lyr_reasAfetassOperaesPorturiascomServidodePassagemSituaoAtual_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiascomServidodePassagemSituaoAtual_53, 
                style: style_reasAfetassOperaesPorturiascomServidodePassagemSituaoAtual_53,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias com Servidão de Passagem - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiascomServidodePassagemSituaoAtual_53.png" /> Áreas Afetas às Operações Portuárias com Servidão de Passagem - Situação Atual'
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_54 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_54 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_54.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_54.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_54);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_54, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_54,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_54.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo'
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_55 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_55 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_55.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_55.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_55);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_55, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_55,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_55.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo'
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_56 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_56 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_56.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_56.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_56);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_56, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_56,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_56.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo'
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_57 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_57 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_57.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_57.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_57);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_57, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_57,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_57.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual '
            });
var format_ApoioOperacionalereadeServios_58 = new ol.format.GeoJSON();
var features_ApoioOperacionalereadeServios_58 = format_ApoioOperacionalereadeServios_58.readFeatures(json_ApoioOperacionalereadeServios_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ApoioOperacionalereadeServios_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApoioOperacionalereadeServios_58.addFeatures(features_ApoioOperacionalereadeServios_58);
var lyr_ApoioOperacionalereadeServios_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApoioOperacionalereadeServios_58, 
                style: style_ApoioOperacionalereadeServios_58,
                popuplayertitle: 'Apoio Operacional e Área de Serviços',
                interactive: true,
                title: '<img src="styles/legend/ApoioOperacionalereadeServios_58.png" /> Apoio Operacional e Área de Serviços'
            });
var format_CargaGeralEspecialmenteTorasdeMadeira_59 = new ol.format.GeoJSON();
var features_CargaGeralEspecialmenteTorasdeMadeira_59 = format_CargaGeralEspecialmenteTorasdeMadeira_59.readFeatures(json_CargaGeralEspecialmenteTorasdeMadeira_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CargaGeralEspecialmenteTorasdeMadeira_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralEspecialmenteTorasdeMadeira_59.addFeatures(features_CargaGeralEspecialmenteTorasdeMadeira_59);
var lyr_CargaGeralEspecialmenteTorasdeMadeira_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralEspecialmenteTorasdeMadeira_59, 
                style: style_CargaGeralEspecialmenteTorasdeMadeira_59,
                popuplayertitle: 'Carga Geral (Especialmente Toras de Madeira)',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralEspecialmenteTorasdeMadeira_59.png" /> Carga Geral (Especialmente Toras de Madeira)'
            });
var format_Multipropsito_60 = new ol.format.GeoJSON();
var features_Multipropsito_60 = format_Multipropsito_60.readFeatures(json_Multipropsito_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Multipropsito_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_60.addFeatures(features_Multipropsito_60);
var lyr_Multipropsito_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_60, 
                style: style_Multipropsito_60,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_60.png" /> Multipropósito'
            });
var format_GranisSlidos_61 = new ol.format.GeoJSON();
var features_GranisSlidos_61 = format_GranisSlidos_61.readFeatures(json_GranisSlidos_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranisSlidos_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidos_61.addFeatures(features_GranisSlidos_61);
var lyr_GranisSlidos_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidos_61, 
                style: style_GranisSlidos_61,
                popuplayertitle: 'Granéis Sólidos',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidos_61.png" /> Granéis Sólidos'
            });
var format_ApoioOperacionalereadeServios_62 = new ol.format.GeoJSON();
var features_ApoioOperacionalereadeServios_62 = format_ApoioOperacionalereadeServios_62.readFeatures(json_ApoioOperacionalereadeServios_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ApoioOperacionalereadeServios_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApoioOperacionalereadeServios_62.addFeatures(features_ApoioOperacionalereadeServios_62);
var lyr_ApoioOperacionalereadeServios_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApoioOperacionalereadeServios_62, 
                style: style_ApoioOperacionalereadeServios_62,
                popuplayertitle: 'Apoio Operacional e Área de Serviços',
                interactive: true,
                title: '<img src="styles/legend/ApoioOperacionalereadeServios_62.png" /> Apoio Operacional e Área de Serviços'
            });
var format_CargaGeralEspecialmenteTorasdeMadeira_63 = new ol.format.GeoJSON();
var features_CargaGeralEspecialmenteTorasdeMadeira_63 = format_CargaGeralEspecialmenteTorasdeMadeira_63.readFeatures(json_CargaGeralEspecialmenteTorasdeMadeira_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CargaGeralEspecialmenteTorasdeMadeira_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralEspecialmenteTorasdeMadeira_63.addFeatures(features_CargaGeralEspecialmenteTorasdeMadeira_63);
var lyr_CargaGeralEspecialmenteTorasdeMadeira_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralEspecialmenteTorasdeMadeira_63, 
                style: style_CargaGeralEspecialmenteTorasdeMadeira_63,
                popuplayertitle: 'Carga Geral (Especialmente Toras de Madeira)',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralEspecialmenteTorasdeMadeira_63.png" /> Carga Geral (Especialmente Toras de Madeira)'
            });
var format_Multipropsito_64 = new ol.format.GeoJSON();
var features_Multipropsito_64 = format_Multipropsito_64.readFeatures(json_Multipropsito_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Multipropsito_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_64.addFeatures(features_Multipropsito_64);
var lyr_Multipropsito_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_64, 
                style: style_Multipropsito_64,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_64.png" /> Multipropósito'
            });
var format_GranisSlidos_65 = new ol.format.GeoJSON();
var features_GranisSlidos_65 = format_GranisSlidos_65.readFeatures(json_GranisSlidos_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranisSlidos_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidos_65.addFeatures(features_GranisSlidos_65);
var lyr_GranisSlidos_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidos_65, 
                style: style_GranisSlidos_65,
                popuplayertitle: 'Granéis Sólidos',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidos_65.png" /> Granéis Sólidos'
            });
var format_ApoioOperacionalereadeServios_66 = new ol.format.GeoJSON();
var features_ApoioOperacionalereadeServios_66 = format_ApoioOperacionalereadeServios_66.readFeatures(json_ApoioOperacionalereadeServios_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ApoioOperacionalereadeServios_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApoioOperacionalereadeServios_66.addFeatures(features_ApoioOperacionalereadeServios_66);
var lyr_ApoioOperacionalereadeServios_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApoioOperacionalereadeServios_66, 
                style: style_ApoioOperacionalereadeServios_66,
                popuplayertitle: 'Apoio Operacional e Área de Serviços',
                interactive: true,
                title: '<img src="styles/legend/ApoioOperacionalereadeServios_66.png" /> Apoio Operacional e Área de Serviços'
            });
var format_CargaGeralEspecialmenteTorasdeMadeira_67 = new ol.format.GeoJSON();
var features_CargaGeralEspecialmenteTorasdeMadeira_67 = format_CargaGeralEspecialmenteTorasdeMadeira_67.readFeatures(json_CargaGeralEspecialmenteTorasdeMadeira_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CargaGeralEspecialmenteTorasdeMadeira_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralEspecialmenteTorasdeMadeira_67.addFeatures(features_CargaGeralEspecialmenteTorasdeMadeira_67);
var lyr_CargaGeralEspecialmenteTorasdeMadeira_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralEspecialmenteTorasdeMadeira_67, 
                style: style_CargaGeralEspecialmenteTorasdeMadeira_67,
                popuplayertitle: 'Carga Geral (Especialmente Toras de Madeira)',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralEspecialmenteTorasdeMadeira_67.png" /> Carga Geral (Especialmente Toras de Madeira)'
            });
var format_Multipropsito_68 = new ol.format.GeoJSON();
var features_Multipropsito_68 = format_Multipropsito_68.readFeatures(json_Multipropsito_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Multipropsito_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_68.addFeatures(features_Multipropsito_68);
var lyr_Multipropsito_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_68, 
                style: style_Multipropsito_68,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_68.png" /> Multipropósito'
            });
var format_GranisSlidos_69 = new ol.format.GeoJSON();
var features_GranisSlidos_69 = format_GranisSlidos_69.readFeatures(json_GranisSlidos_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranisSlidos_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidos_69.addFeatures(features_GranisSlidos_69);
var lyr_GranisSlidos_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidos_69, 
                style: style_GranisSlidos_69,
                popuplayertitle: 'Granéis Sólidos',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidos_69.png" /> Granéis Sólidos'
            });
var format_ApoioOperacionalereadeServios_70 = new ol.format.GeoJSON();
var features_ApoioOperacionalereadeServios_70 = format_ApoioOperacionalereadeServios_70.readFeatures(json_ApoioOperacionalereadeServios_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ApoioOperacionalereadeServios_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApoioOperacionalereadeServios_70.addFeatures(features_ApoioOperacionalereadeServios_70);
var lyr_ApoioOperacionalereadeServios_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApoioOperacionalereadeServios_70, 
                style: style_ApoioOperacionalereadeServios_70,
                popuplayertitle: 'Apoio Operacional e Área de Serviços',
                interactive: true,
                title: '<img src="styles/legend/ApoioOperacionalereadeServios_70.png" /> Apoio Operacional e Área de Serviços'
            });
var format_CargaGeralEspecialmenteTorasdeMadeira_71 = new ol.format.GeoJSON();
var features_CargaGeralEspecialmenteTorasdeMadeira_71 = format_CargaGeralEspecialmenteTorasdeMadeira_71.readFeatures(json_CargaGeralEspecialmenteTorasdeMadeira_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CargaGeralEspecialmenteTorasdeMadeira_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralEspecialmenteTorasdeMadeira_71.addFeatures(features_CargaGeralEspecialmenteTorasdeMadeira_71);
var lyr_CargaGeralEspecialmenteTorasdeMadeira_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralEspecialmenteTorasdeMadeira_71, 
                style: style_CargaGeralEspecialmenteTorasdeMadeira_71,
                popuplayertitle: 'Carga Geral (Especialmente Toras de Madeira)',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralEspecialmenteTorasdeMadeira_71.png" /> Carga Geral (Especialmente Toras de Madeira)'
            });
var format_Multipropsito_72 = new ol.format.GeoJSON();
var features_Multipropsito_72 = format_Multipropsito_72.readFeatures(json_Multipropsito_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Multipropsito_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_72.addFeatures(features_Multipropsito_72);
var lyr_Multipropsito_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_72, 
                style: style_Multipropsito_72,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_72.png" /> Multipropósito'
            });
var format_GranisSlidos_73 = new ol.format.GeoJSON();
var features_GranisSlidos_73 = format_GranisSlidos_73.readFeatures(json_GranisSlidos_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranisSlidos_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidos_73.addFeatures(features_GranisSlidos_73);
var lyr_GranisSlidos_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidos_73, 
                style: style_GranisSlidos_73,
                popuplayertitle: 'Granéis Sólidos',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidos_73.png" /> Granéis Sólidos'
            });
var format_reasAfetassOperaesPorturiasLongoPrazo_74 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasLongoPrazo_74 = format_reasAfetassOperaesPorturiasLongoPrazo_74.readFeatures(json_reasAfetassOperaesPorturiasLongoPrazo_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasLongoPrazo_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasLongoPrazo_74.addFeatures(features_reasAfetassOperaesPorturiasLongoPrazo_74);
var lyr_reasAfetassOperaesPorturiasLongoPrazo_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasLongoPrazo_74, 
                style: style_reasAfetassOperaesPorturiasLongoPrazo_74,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasLongoPrazo_74.png" /> Áreas Afetas às Operações Portuárias - Longo Prazo'
            });
var format_reasAfetassOperaesPorturiasMdioPrazo_75 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasMdioPrazo_75 = format_reasAfetassOperaesPorturiasMdioPrazo_75.readFeatures(json_reasAfetassOperaesPorturiasMdioPrazo_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasMdioPrazo_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasMdioPrazo_75.addFeatures(features_reasAfetassOperaesPorturiasMdioPrazo_75);
var lyr_reasAfetassOperaesPorturiasMdioPrazo_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasMdioPrazo_75, 
                style: style_reasAfetassOperaesPorturiasMdioPrazo_75,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasMdioPrazo_75.png" /> Áreas Afetas às Operações Portuárias - Médio Prazo'
            });
var format_reasAfetassOperaesPorturiasCurtoPrazo_76 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasCurtoPrazo_76 = format_reasAfetassOperaesPorturiasCurtoPrazo_76.readFeatures(json_reasAfetassOperaesPorturiasCurtoPrazo_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_76.addFeatures(features_reasAfetassOperaesPorturiasCurtoPrazo_76);
var lyr_reasAfetassOperaesPorturiasCurtoPrazo_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_76, 
                style: style_reasAfetassOperaesPorturiasCurtoPrazo_76,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasCurtoPrazo_76.png" /> Áreas Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasSituaoAtual_77 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasSituaoAtual_77 = format_reasAfetassOperaesPorturiasSituaoAtual_77.readFeatures(json_reasAfetassOperaesPorturiasSituaoAtual_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasSituaoAtual_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasSituaoAtual_77.addFeatures(features_reasAfetassOperaesPorturiasSituaoAtual_77);
var lyr_reasAfetassOperaesPorturiasSituaoAtual_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasSituaoAtual_77, 
                style: style_reasAfetassOperaesPorturiasSituaoAtual_77,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasSituaoAtual_77.png" /> Áreas Afetas às Operações Portuárias - Situação Atual '
            });
var format_PoligonaldareadoPortoOrganizadodePelotas_78 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodePelotas_78 = format_PoligonaldareadoPortoOrganizadodePelotas_78.readFeatures(json_PoligonaldareadoPortoOrganizadodePelotas_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoligonaldareadoPortoOrganizadodePelotas_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodePelotas_78.addFeatures(features_PoligonaldareadoPortoOrganizadodePelotas_78);
var lyr_PoligonaldareadoPortoOrganizadodePelotas_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodePelotas_78, 
                style: style_PoligonaldareadoPortoOrganizadodePelotas_78,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Pelotas',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodePelotas_78.png" /> Poligonal da Área do Porto Organizado de Pelotas'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodePelotas_78,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado '});
var group_reasAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasLongoPrazo_74,lyr_reasAfetassOperaesPorturiasMdioPrazo_75,lyr_reasAfetassOperaesPorturiasCurtoPrazo_76,lyr_reasAfetassOperaesPorturiasSituaoAtual_77,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual = new ol.layer.Group({
                                layers: [lyr_ApoioOperacionalereadeServios_70,lyr_CargaGeralEspecialmenteTorasdeMadeira_71,lyr_Multipropsito_72,lyr_GranisSlidos_73,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Situação Atual'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo = new ol.layer.Group({
                                layers: [lyr_ApoioOperacionalereadeServios_66,lyr_CargaGeralEspecialmenteTorasdeMadeira_67,lyr_Multipropsito_68,lyr_GranisSlidos_69,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Curto Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo = new ol.layer.Group({
                                layers: [lyr_ApoioOperacionalereadeServios_62,lyr_CargaGeralEspecialmenteTorasdeMadeira_63,lyr_Multipropsito_64,lyr_GranisSlidos_65,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Médio Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo = new ol.layer.Group({
                                layers: [lyr_ApoioOperacionalereadeServios_58,lyr_CargaGeralEspecialmenteTorasdeMadeira_59,lyr_Multipropsito_60,lyr_GranisSlidos_61,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Longo Prazo'});
var group_reasAfetassOperaesPorturiasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_54,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_55,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_56,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_57,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Arrendadas '});
var group_reasAfetassOperaesPorturiascomServidodePassagem = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiascomServidodePassagemLongoPrazo_50,lyr_reasAfetassOperaesPorturiascomServidodePassagemMdioPrazo_51,lyr_reasAfetassOperaesPorturiascomServidodePassagemCurtoPrazo_52,lyr_reasAfetassOperaesPorturiascomServidodePassagemSituaoAtual_53,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias com Servidão de Passagem'});
var group_reasAfetassOperaesPorturiasdeUsoPblico = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasdeUsoPblicoLongoPrazo_46,lyr_reasAfetassOperaesPorturiasdeUsoPblicoMdioPrazo_47,lyr_reasAfetassOperaesPorturiasdeUsoPblicoCurtoPrazo_48,lyr_reasAfetassOperaesPorturiasdeUsoPblicoSituaoAtual_49,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias de Uso Público'});
var group_reasAfetassOperaesPorturiasDisponveisparaArrendamento = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento'});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_38,lyr_ArmazenagemMdioPrazo_39,lyr_ArmazenagemCurtoPrazo_40,lyr_ArmazenagemSituaoAtual_41,],
                                fold: 'open',
                                title: 'Armazenagem'});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_34,lyr_AcostagemMdioPrazo_35,lyr_AcostagemCurtoPrazo_36,lyr_AcostagemSituaoAtual_37,],
                                fold: 'open',
                                title: 'Acostagem'});
var group_reasNoAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasLongoPrazo_30,lyr_reasNoAfetassOperaesPorturiasMdioPrazo_31,lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_32,lyr_reasNoAfetassOperaesPorturiasSituaoAtual_33,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias'});
var group_reasNoAfetassOperaesPorturiasemExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_26,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_28,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_29,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta'});
var group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_22,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_23,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_24,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_25,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta'});
var group_reaseInstalaesAlfandegadas = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadas_21,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas '});
var group_AcessosRodoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosExternos_20,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Externos '});
var group_AcessosRodoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosInternosLongoPrazo_16,lyr_AcessosRodoviriosInternosMdioPrazo_17,lyr_AcessosRodoviriosInternosCurtoPrazo_18,lyr_AcessosRodoviriosInternosSituaoAtual_19,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Internos '});
var group_AcessosFerroviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviriosExternos_15,],
                                fold: 'open',
                                title: 'Acessos Ferroviários Externos '});
var group_AcessosHidroviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosHidroviriosExternos_14,],
                                fold: 'open',
                                title: 'Acessos Hidroviários Externos '});
var group_CanaisdeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaisdeAcessoLongoPrazo_10,lyr_CanaisdeAcessoMdioPrazo_11,lyr_CanaisdeAcessoCurtoPrazo_12,lyr_CanaisdeAcessoSituaoAtual_13,],
                                fold: 'open',
                                title: 'Canais de Acesso '});
var group_BaciasdeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciasdeEvoluoLongoPrazo_6,lyr_BaciasdeEvoluoMdioPrazo_7,lyr_BaciasdeEvoluoCurtoPrazo_8,lyr_BaciasdeEvoluoSituaoAtual_9,],
                                fold: 'open',
                                title: 'Bacias de Evolução '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadourosLongoPrazo_2,lyr_FundeadourosMdioPrazo_3,lyr_FundeadourosCurtoPrazo_4,lyr_FundeadourosSituaoAtual_5,],
                                fold: 'open',
                                title: 'Fundeadouros '});
var group_reasUrbanaseRurais = new ol.layer.Group({
                                layers: [lyr_reasUrbanaseRurais_1,],
                                fold: 'open',
                                title: 'Áreas Urbanas e Rurais'});

lyr_EsriImagery_0.setVisible(true);lyr_reasUrbanaseRurais_1.setVisible(false);lyr_FundeadourosLongoPrazo_2.setVisible(false);lyr_FundeadourosMdioPrazo_3.setVisible(false);lyr_FundeadourosCurtoPrazo_4.setVisible(false);lyr_FundeadourosSituaoAtual_5.setVisible(false);lyr_BaciasdeEvoluoLongoPrazo_6.setVisible(false);lyr_BaciasdeEvoluoMdioPrazo_7.setVisible(false);lyr_BaciasdeEvoluoCurtoPrazo_8.setVisible(false);lyr_BaciasdeEvoluoSituaoAtual_9.setVisible(false);lyr_CanaisdeAcessoLongoPrazo_10.setVisible(false);lyr_CanaisdeAcessoMdioPrazo_11.setVisible(false);lyr_CanaisdeAcessoCurtoPrazo_12.setVisible(false);lyr_CanaisdeAcessoSituaoAtual_13.setVisible(false);lyr_AcessosHidroviriosExternos_14.setVisible(false);lyr_AcessosFerroviriosExternos_15.setVisible(false);lyr_AcessosRodoviriosInternosLongoPrazo_16.setVisible(false);lyr_AcessosRodoviriosInternosMdioPrazo_17.setVisible(false);lyr_AcessosRodoviriosInternosCurtoPrazo_18.setVisible(false);lyr_AcessosRodoviriosInternosSituaoAtual_19.setVisible(false);lyr_AcessosRodoviriosExternos_20.setVisible(false);lyr_reaseInstalaesAlfandegadas_21.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_22.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_23.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_24.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_25.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_26.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_28.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_29.setVisible(false);lyr_reasNoAfetassOperaesPorturiasLongoPrazo_30.setVisible(false);lyr_reasNoAfetassOperaesPorturiasMdioPrazo_31.setVisible(false);lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_32.setVisible(false);lyr_reasNoAfetassOperaesPorturiasSituaoAtual_33.setVisible(false);lyr_AcostagemLongoPrazo_34.setVisible(false);lyr_AcostagemMdioPrazo_35.setVisible(false);lyr_AcostagemCurtoPrazo_36.setVisible(false);lyr_AcostagemSituaoAtual_37.setVisible(false);lyr_ArmazenagemLongoPrazo_38.setVisible(false);lyr_ArmazenagemMdioPrazo_39.setVisible(false);lyr_ArmazenagemCurtoPrazo_40.setVisible(false);lyr_ArmazenagemSituaoAtual_41.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45.setVisible(false);lyr_reasAfetassOperaesPorturiasdeUsoPblicoLongoPrazo_46.setVisible(false);lyr_reasAfetassOperaesPorturiasdeUsoPblicoMdioPrazo_47.setVisible(false);lyr_reasAfetassOperaesPorturiasdeUsoPblicoCurtoPrazo_48.setVisible(false);lyr_reasAfetassOperaesPorturiasdeUsoPblicoSituaoAtual_49.setVisible(false);lyr_reasAfetassOperaesPorturiascomServidodePassagemLongoPrazo_50.setVisible(false);lyr_reasAfetassOperaesPorturiascomServidodePassagemMdioPrazo_51.setVisible(false);lyr_reasAfetassOperaesPorturiascomServidodePassagemCurtoPrazo_52.setVisible(false);lyr_reasAfetassOperaesPorturiascomServidodePassagemSituaoAtual_53.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_54.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_55.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_56.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_57.setVisible(false);lyr_ApoioOperacionalereadeServios_58.setVisible(false);lyr_CargaGeralEspecialmenteTorasdeMadeira_59.setVisible(false);lyr_Multipropsito_60.setVisible(false);lyr_GranisSlidos_61.setVisible(false);lyr_ApoioOperacionalereadeServios_62.setVisible(false);lyr_CargaGeralEspecialmenteTorasdeMadeira_63.setVisible(false);lyr_Multipropsito_64.setVisible(false);lyr_GranisSlidos_65.setVisible(false);lyr_ApoioOperacionalereadeServios_66.setVisible(false);lyr_CargaGeralEspecialmenteTorasdeMadeira_67.setVisible(false);lyr_Multipropsito_68.setVisible(false);lyr_GranisSlidos_69.setVisible(false);lyr_ApoioOperacionalereadeServios_70.setVisible(false);lyr_CargaGeralEspecialmenteTorasdeMadeira_71.setVisible(false);lyr_Multipropsito_72.setVisible(false);lyr_GranisSlidos_73.setVisible(false);lyr_reasAfetassOperaesPorturiasLongoPrazo_74.setVisible(false);lyr_reasAfetassOperaesPorturiasMdioPrazo_75.setVisible(false);lyr_reasAfetassOperaesPorturiasCurtoPrazo_76.setVisible(false);lyr_reasAfetassOperaesPorturiasSituaoAtual_77.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodePelotas_78.setVisible(true);
var layersList = [lyr_EsriImagery_0,group_reasUrbanaseRurais,group_Fundeadouros,group_BaciasdeEvoluo,group_CanaisdeAcesso,group_AcessosHidroviriosExternos,group_AcessosFerroviriosExternos,group_AcessosRodoviriosInternos,group_AcessosRodoviriosExternos,group_reaseInstalaesAlfandegadas,group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta,group_reasNoAfetassOperaesPorturiasemExploraoIndireta,group_reasNoAfetassOperaesPorturias,group_Acostagem,group_Armazenagem,group_reasAfetassOperaesPorturiasDisponveisparaArrendamento,group_reasAfetassOperaesPorturiasdeUsoPblico,group_reasAfetassOperaesPorturiascomServidodePassagem,group_reasAfetassOperaesPorturiasArrendadas,group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual,group_reasAfetassOperaesPorturias,group_PoligonaldareadoPortoOrganizado];
lyr_reasUrbanaseRurais_1.set('fieldAliases', {'Nome': 'Nome', 'Ins. Legal': 'Instrumento Legal ', });
lyr_FundeadourosLongoPrazo_2.set('fieldAliases', {'N. Ident.': 'Número de Identificação ', 'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_FundeadourosMdioPrazo_3.set('fieldAliases', {'N. Ident.': 'Número de Identificação ', 'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_FundeadourosCurtoPrazo_4.set('fieldAliases', {'N. Ident.': 'Número de Identificação ', 'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_FundeadourosSituaoAtual_5.set('fieldAliases', {'N. Ident.': 'Número de Identificação ', 'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoLongoPrazo_6.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoMdioPrazo_7.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoCurtoPrazo_8.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoSituaoAtual_9.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoLongoPrazo_10.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoMdioPrazo_11.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoCurtoPrazo_12.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoSituaoAtual_13.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_AcessosHidroviriosExternos_14.set('fieldAliases', {'Nome': 'Nome', 'Calado': 'Calado', 'Atual.': 'Atualização', });
lyr_AcessosFerroviriosExternos_15.set('fieldAliases', {'Linha': 'Linha', 'Operador': 'Operador', 'Trecho': 'Trecho', 'Descricao': 'Descrição ', });
lyr_AcessosRodoviriosInternosLongoPrazo_16.set('fieldAliases', {'Ident.': 'Identificação ', 'Nº Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosMdioPrazo_17.set('fieldAliases', {'Ident.': 'Identificação ', 'Nº Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosCurtoPrazo_18.set('fieldAliases', {'Ident.': 'Identificação ', 'Nº Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosSituaoAtual_19.set('fieldAliases', {'Ident.': 'Identificação ', 'Nº Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosExternos_20.set('fieldAliases', {'Nome': 'Nome', 'Sigla': 'Sigla', 'Jurisdicao': 'Jurisdição ', });
lyr_reaseInstalaesAlfandegadas_21.set('fieldAliases', {'Inst.Legal': 'nstrumento Legal ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_22.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação', 'Área': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_23.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação', 'Área': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_24.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação', 'Área': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_25.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação', 'Área': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_26.set('fieldAliases', {'Nome': 'Nome', 'T. Cessão': 'Tipo de Cessão ', 'Respons.': 'Responsável ', 'Área': 'Área (m²) ', 'D. Inicio': 'Data de Início do Contrato ', 'D. Term.': 'Data de Término do Contrato ', 'A. Desenv.': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27.set('fieldAliases', {'Nome': 'Nome', 'T. Cessão': 'Tipo de Cessão ', 'Respons.': 'Responsável ', 'Área': 'Área (m²) ', 'D. Inicio': 'Data de Início do Contrato ', 'D. Term.': 'Data de Término do Contrato ', 'A. Desenv.': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_28.set('fieldAliases', {'Nome': 'Nome', 'T. Cessão': 'Tipo de Cessão ', 'Respons.': 'Responsável ', 'Área': 'Área (m²) ', 'D. Inicio': 'Data de Início do Contrato ', 'D. Term.': 'Data de Término do Contrato ', 'A. Desenv.': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_29.set('fieldAliases', {'Nome': 'Nome', 'T. Cessão': 'Tipo de Cessão ', 'Respons.': 'Responsável ', 'Área': 'Área (m²) ', 'D. Inicio': 'Data de Início do Contrato ', 'D. Term.': 'Data de Término do Contrato ', 'A. Desenv.': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_30.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Área': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_31.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Área': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_32.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Área': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_33.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Área': 'Área (m²) ', });
lyr_AcostagemLongoPrazo_34.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berço': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_AcostagemMdioPrazo_35.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berço': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_AcostagemCurtoPrazo_36.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berço': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_AcostagemSituaoAtual_37.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berço': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_ArmazenagemLongoPrazo_38.set('fieldAliases', {'T. Instal.': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Área': 'Área (m²) ', 'Volume': 'Volume (m³) ', 'Nome': 'Nome', });
lyr_ArmazenagemMdioPrazo_39.set('fieldAliases', {'T. Instal.': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Área': 'Área (m²) ', 'Volume': 'Volume (m³) ', 'Nome': 'Nome', });
lyr_ArmazenagemCurtoPrazo_40.set('fieldAliases', {'T. Instal.': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Área': 'Área (m²) ', 'Volume': 'Volume (m³) ', 'Nome': 'Nome', });
lyr_ArmazenagemSituaoAtual_41.set('fieldAliases', {'T. Instal.': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Área': 'Área (m²) ', 'Volume': 'Volume (m³) ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasdeUsoPblicoLongoPrazo_46.set('fieldAliases', {'Nome': 'Nome', 'Arrend.': 'Arrendatário ', 'Nº Cont.': 'Número do Contrato ', 'D. Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato ', 'P. Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasdeUsoPblicoMdioPrazo_47.set('fieldAliases', {'Nome': 'Nome', 'Arrend.': 'Arrendatário ', 'Nº Cont.': 'Número do Contrato ', 'D. Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato ', 'P. Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área', });
lyr_reasAfetassOperaesPorturiasdeUsoPblicoCurtoPrazo_48.set('fieldAliases', {'Nome': 'Nome', 'Arrend.': 'Arrendatário ', 'Nº Cont.': 'Número do Contrato ', 'D. Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato ', 'P. Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasdeUsoPblicoSituaoAtual_49.set('fieldAliases', {'Nome': 'Nome', 'Arrend.': 'Arrendatário ', 'Nº Cont.': 'Número do Contrato ', 'D. Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato ', 'P. Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiascomServidodePassagemLongoPrazo_50.set('fieldAliases', {'Nome': 'Nome', 'Arrend.': 'Arrendatário ', 'Nº Cont.': 'Número do Contrato ', 'D. Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato ', 'P.Prorrog.': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiascomServidodePassagemMdioPrazo_51.set('fieldAliases', {'Nome': 'Nome', 'Arrend.': 'Arrendatário ', 'Nº Cont.': 'Número do Contrato ', 'D. Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato ', 'P.Prorrog.': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área', });
lyr_reasAfetassOperaesPorturiascomServidodePassagemCurtoPrazo_52.set('fieldAliases', {'Nome': 'Nome', 'Arrend.': 'Arrendatário ', 'Nº Cont.': 'Número do Contrato ', 'D. Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato ', 'P.Prorrog.': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiascomServidodePassagemSituaoAtual_53.set('fieldAliases', {'Nome': 'Nome', 'Arrend.': 'Arrendatário ', 'Nº Cont.': 'Número do Contrato ', 'D. Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato ', 'P.Prorrog.': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_54.set('fieldAliases', {'Nome': 'Nome', 'Arrend.': 'Arrendatário ', 'Nº Cont.': 'Número do Contrato ', 'D. Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato ', 'P.Prorrog.': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_55.set('fieldAliases', {'Nome': 'Nome', 'Arrend.': 'Arrendatário ', 'Nº Cont.': 'Número do Contrato ', 'D. Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato ', 'P.Prorrog.': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_56.set('fieldAliases', {'Nome': 'Nome', 'Arrend.': 'Arrendatário ', 'Nº Cont.': 'Número do Contrato ', 'D. Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato ', 'P.Prorrog.': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_57.set('fieldAliases', {'Nome': 'Nome', 'Arrend.': 'Arrendatário ', 'Nº Cont.': 'Número do Contrato ', 'D. Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato ', 'P.Prorrog.': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', });
lyr_ApoioOperacionalereadeServios_58.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_CargaGeralEspecialmenteTorasdeMadeira_59.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', });
lyr_Multipropsito_60.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisSlidos_61.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_ApoioOperacionalereadeServios_62.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_CargaGeralEspecialmenteTorasdeMadeira_63.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', });
lyr_Multipropsito_64.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisSlidos_65.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_ApoioOperacionalereadeServios_66.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_CargaGeralEspecialmenteTorasdeMadeira_67.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', });
lyr_Multipropsito_68.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisSlidos_69.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_ApoioOperacionalereadeServios_70.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_CargaGeralEspecialmenteTorasdeMadeira_71.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', });
lyr_Multipropsito_72.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisSlidos_73.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_74.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_75.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_76.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_77.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', });
lyr_PoligonaldareadoPortoOrganizadodePelotas_78.set('fieldAliases', {'Ins. Legal': 'Instrumento Legal ', 'Anexo': 'Anexo', 'Nome': 'Nome', });
lyr_reasUrbanaseRurais_1.set('fieldImages', {'Nome': 'TextEdit', 'Ins. Legal': 'TextEdit', });
lyr_FundeadourosLongoPrazo_2.set('fieldImages', {'N. Ident.': 'TextEdit', 'Função': '', 'Calado': 'TextEdit', });
lyr_FundeadourosMdioPrazo_3.set('fieldImages', {'N. Ident.': 'TextEdit', 'Função': '', 'Calado': 'TextEdit', });
lyr_FundeadourosCurtoPrazo_4.set('fieldImages', {'N. Ident.': 'TextEdit', 'Função': '', 'Calado': 'TextEdit', });
lyr_FundeadourosSituaoAtual_5.set('fieldImages', {'N. Ident.': 'TextEdit', 'Função': '', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoLongoPrazo_6.set('fieldImages', {'Função': '', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoMdioPrazo_7.set('fieldImages', {'Função': '', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoCurtoPrazo_8.set('fieldImages', {'Função': '', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoSituaoAtual_9.set('fieldImages', {'Função': '', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoLongoPrazo_10.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoMdioPrazo_11.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoCurtoPrazo_12.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoSituaoAtual_13.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_AcessosHidroviriosExternos_14.set('fieldImages', {'Nome': 'TextEdit', 'Calado': 'TextEdit', 'Atual.': 'DateTime', });
lyr_AcessosFerroviriosExternos_15.set('fieldImages', {'Linha': 'TextEdit', 'Operador': 'TextEdit', 'Trecho': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_AcessosRodoviriosInternosLongoPrazo_16.set('fieldImages', {'Ident.': 'TextEdit', 'Nº Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosMdioPrazo_17.set('fieldImages', {'Ident.': 'TextEdit', 'Nº Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosCurtoPrazo_18.set('fieldImages', {'Ident.': 'TextEdit', 'Nº Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosSituaoAtual_19.set('fieldImages', {'Ident.': 'TextEdit', 'Nº Pistas': 'TextEdit', });
lyr_AcessosRodoviriosExternos_20.set('fieldImages', {'Nome': 'TextEdit', 'Sigla': 'TextEdit', 'Jurisdicao': 'TextEdit', });
lyr_reaseInstalaesAlfandegadas_21.set('fieldImages', {'Inst.Legal': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_22.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_23.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_24.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_25.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_26.set('fieldImages', {'Nome': 'TextEdit', 'T. Cessão': 'TextEdit', 'Respons.': 'TextEdit', 'Área': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'A. Desenv.': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27.set('fieldImages', {'Nome': 'TextEdit', 'T. Cessão': 'TextEdit', 'Respons.': 'TextEdit', 'Área': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'A. Desenv.': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_28.set('fieldImages', {'Nome': 'TextEdit', 'T. Cessão': 'TextEdit', 'Respons.': 'TextEdit', 'Área': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'A. Desenv.': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_29.set('fieldImages', {'Nome': 'TextEdit', 'T. Cessão': 'TextEdit', 'Respons.': 'TextEdit', 'Área': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'A. Desenv.': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_30.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_31.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_32.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_33.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Área': 'TextEdit', });
lyr_AcostagemLongoPrazo_34.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemMdioPrazo_35.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemCurtoPrazo_36.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemSituaoAtual_37.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_38.set('fieldImages', {'T. Instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Área': 'TextEdit', 'Volume': 'TextEdit', 'Nome': 'TextEdit', });
lyr_ArmazenagemMdioPrazo_39.set('fieldImages', {'T. Instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Área': 'TextEdit', 'Volume': 'TextEdit', 'Nome': 'TextEdit', });
lyr_ArmazenagemCurtoPrazo_40.set('fieldImages', {'T. Instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Área': 'TextEdit', 'Volume': 'TextEdit', 'Nome': 'TextEdit', });
lyr_ArmazenagemSituaoAtual_41.set('fieldImages', {'T. Instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Área': 'TextEdit', 'Volume': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasdeUsoPblicoLongoPrazo_46.set('fieldImages', {'Nome': 'TextEdit', 'Arrend.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasdeUsoPblicoMdioPrazo_47.set('fieldImages', {'Nome': 'TextEdit', 'Arrend.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasdeUsoPblicoCurtoPrazo_48.set('fieldImages', {'Nome': 'TextEdit', 'Arrend.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasdeUsoPblicoSituaoAtual_49.set('fieldImages', {'Nome': 'TextEdit', 'Arrend.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasAfetassOperaesPorturiascomServidodePassagemLongoPrazo_50.set('fieldImages', {'Nome': 'TextEdit', 'Arrend.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P.Prorrog.': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasAfetassOperaesPorturiascomServidodePassagemMdioPrazo_51.set('fieldImages', {'Nome': 'TextEdit', 'Arrend.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P.Prorrog.': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasAfetassOperaesPorturiascomServidodePassagemCurtoPrazo_52.set('fieldImages', {'Nome': 'TextEdit', 'Arrend.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P.Prorrog.': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasAfetassOperaesPorturiascomServidodePassagemSituaoAtual_53.set('fieldImages', {'Nome': 'TextEdit', 'Arrend.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P.Prorrog.': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_54.set('fieldImages', {'Nome': 'TextEdit', 'Arrend.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P.Prorrog.': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_55.set('fieldImages', {'Nome': 'TextEdit', 'Arrend.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P.Prorrog.': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_56.set('fieldImages', {'Nome': 'TextEdit', 'Arrend.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P.Prorrog.': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_57.set('fieldImages', {'Nome': 'TextEdit', 'Arrend.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P.Prorrog.': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', });
lyr_ApoioOperacionalereadeServios_58.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_CargaGeralEspecialmenteTorasdeMadeira_59.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_Multipropsito_60.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisSlidos_61.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_ApoioOperacionalereadeServios_62.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_CargaGeralEspecialmenteTorasdeMadeira_63.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_Multipropsito_64.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisSlidos_65.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_ApoioOperacionalereadeServios_66.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_CargaGeralEspecialmenteTorasdeMadeira_67.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_Multipropsito_68.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisSlidos_69.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_ApoioOperacionalereadeServios_70.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_CargaGeralEspecialmenteTorasdeMadeira_71.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_Multipropsito_72.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisSlidos_73.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_74.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_75.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_76.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_77.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodePelotas_78.set('fieldImages', {'Ins. Legal': 'TextEdit', 'Anexo': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasUrbanaseRurais_1.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Ins. Legal': 'inline label - visible with data', });
lyr_FundeadourosLongoPrazo_2.set('fieldLabels', {'N. Ident.': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosMdioPrazo_3.set('fieldLabels', {'N. Ident.': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosCurtoPrazo_4.set('fieldLabels', {'N. Ident.': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosSituaoAtual_5.set('fieldLabels', {'N. Ident.': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoLongoPrazo_6.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoMdioPrazo_7.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoCurtoPrazo_8.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoSituaoAtual_9.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoLongoPrazo_10.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoMdioPrazo_11.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoCurtoPrazo_12.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoSituaoAtual_13.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_AcessosHidroviriosExternos_14.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Atual.': 'inline label - visible with data', });
lyr_AcessosFerroviriosExternos_15.set('fieldLabels', {'Linha': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Trecho': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosLongoPrazo_16.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'Nº Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosMdioPrazo_17.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'Nº Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosCurtoPrazo_18.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'Nº Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosSituaoAtual_19.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'Nº Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosExternos_20.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'Jurisdicao': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadas_21.set('fieldLabels', {'Inst.Legal': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_22.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_23.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_24.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_25.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_26.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Cessão': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'A. Desenv.': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Cessão': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'A. Desenv.': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_28.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Cessão': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'A. Desenv.': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_29.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Cessão': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'A. Desenv.': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_30.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_31.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_32.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_33.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_34.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_35.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_36.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_37.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_38.set('fieldLabels', {'T. Instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_39.set('fieldLabels', {'T. Instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_40.set('fieldLabels', {'T. Instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_41.set('fieldLabels', {'T. Instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasdeUsoPblicoLongoPrazo_46.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Arrend.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P. Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasdeUsoPblicoMdioPrazo_47.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Arrend.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P. Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasdeUsoPblicoCurtoPrazo_48.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Arrend.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P. Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasdeUsoPblicoSituaoAtual_49.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Arrend.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P. Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiascomServidodePassagemLongoPrazo_50.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Arrend.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P.Prorrog.': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiascomServidodePassagemMdioPrazo_51.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Arrend.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P.Prorrog.': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiascomServidodePassagemCurtoPrazo_52.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Arrend.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P.Prorrog.': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiascomServidodePassagemSituaoAtual_53.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Arrend.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P.Prorrog.': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_54.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Arrend.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P.Prorrog.': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_55.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Arrend.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P.Prorrog.': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_56.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Arrend.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P.Prorrog.': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_57.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Arrend.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P.Prorrog.': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_ApoioOperacionalereadeServios_58.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_CargaGeralEspecialmenteTorasdeMadeira_59.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_Multipropsito_60.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisSlidos_61.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_ApoioOperacionalereadeServios_62.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_CargaGeralEspecialmenteTorasdeMadeira_63.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_Multipropsito_64.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisSlidos_65.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_ApoioOperacionalereadeServios_66.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_CargaGeralEspecialmenteTorasdeMadeira_67.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_Multipropsito_68.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisSlidos_69.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_ApoioOperacionalereadeServios_70.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_CargaGeralEspecialmenteTorasdeMadeira_71.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_Multipropsito_72.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisSlidos_73.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_74.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_75.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_76.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_77.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodePelotas_78.set('fieldLabels', {'Ins. Legal': 'inline label - visible with data', 'Anexo': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodePelotas_78.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});