var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



/*koenigsegg-agera RS*/
router.get('/koenigsegg-ageraRS', function(req, res, next) {
  res.render('car',{
    picture:"images/2015-koenigsegg-agera-rs-5.jpg",
      title:"SPECIFICATION",
    about:"Agera RS Koenigsegg twin turbo aluminum 5,0L V8,\n" +
    "4 valves per cylinder, double overhead\n" +
    "camshafts, dry sump lubrication\n" +
    "Compression: 9.3:1\n" +
    "Bore: 92 mm Stroke: 95.25 mm\n" +
    "Sequential, multipoint fuel injection with\n" +
    "dual knock sensors and back pressure\n" +
    "sensors, closed loop wide band lambda\n" +
    "control, twin ceramic ball bearing turbo\n" +
    "chargers with Koenigsegg patented\n" +
    "backpressure reduction system with va-\n" +
    "riable turbo geometry. 1.3 bar (1.4 with E85)\n" +
    "boost pressure\n" +
    "Dry sump lubrication. Carbon fiber intake\n" +
    "manifold with optimised intake tracts\n" +
    "Tig-welded ceramic coated 0.8 mm wall\n" +
    "thickness inconel exhaust system mani-\n" +
    "fold with merge collector\n" +
    "Total engine weight: 189 kg\n" +
    "Power output – gasoline – 865 kW (1160Hp)\n" +
    "at 7800 rpm – redline at 8250 rpm\n" +
    "Torque: 1000 Nm from 2700 to 6170 rpm\n" +
    "Max torque – 1280 Nm at 4100 rpm\n" +
    "1MW engine option available"

  });
});



/* koenigsegg-agera One*/
router.get('/koenigsegg-ageraOne', function(req, res, next) {
  res.render('car',{
    picture:"images/2014-koenigsegg-agera-one-1.jpg",
      title:"SPECIFICATION",
    about:"One Koenigsegg aluminum 5,0L V8, 4 valves per cylinder, double overhead camshafts with flex-fuel capability.\n" +
    "Compression: 9.0:1\n" +
    "Bore: 92 mm Stroke: 95.25 mm\n" +
    "Sequential, multipoint fuel injection.\n" +
    "Variable geometry twin turbo chargers.\n" +
    "1.8 bar boost pressure.\n" +
    "Dry sump lubrication.\n" +
    "Carbon fibre intake manifold with optimized intake tracts.\n" +
    "Tig-welded ceramic coated Inconel exhaust system manifold with merge collector.\n" +
    "Weight: 197 kg" +
    "Power output: 1 MW at 7500 rpm – rpm limiter @ 8250 rpm\n" +
    "Torque: over 1000 Nm from 3000 to 8000 rpm\n" +
    "Max torque: 1371 Nm at 6000 rpm\n" +
    "0 – 400 km/h approx. 20 sec\n" +
    "400 – 0 km/h approx. 10 sec\n" +
    "Braking distance: 28 m (100-0 km/h)\n" +
    "Max lateral g-force: 2.0 g\n" +
    "Emission levels: Euro VI"
  });
});

/* koenigsegg-regera */
router.get('/koenigsegg-Regera', function(req, res, next) {
  res.render('car',{
    picture:"images/Koenigsegg_Regera_1.jpg" ,
      title:"SPECIFICATION",
    about:" Regera Koenigsegg twin turbo aluminum 5,0L V8,\n" +
    "4 valves per cylinder, double overhead camshafts, dry sump lubrication\n" +
    "Compression: 9.3:1\n" +
    "Bore: 92 mm Stroke: 95.25 mm\n" +
    "Twin ceramic ball bearing turbo chargers with Koenigsegg patented backpressure\n" +
    "reduction system, 1.4 bar boost pressure\n" +
    "Active hydraulic engine mounts\n" +
    "Dry sump lubrication\n" +
    "Carbon fiber intake manifold with optimized intake tracts\n" +
    "Total engine weight: 189 kg\n" +
    "Power output – Premium gasoline –\n" +
    "820kW (1100Hp) at 7800 rpm – redline at 8250 rpm\n" +
    "Torque: 1000 Nm from 2700 to 6170 rpm\n" +
    "Max torque – 1280 Nm at 4100 rpm" +
    "870 Nm and 525 kW (700hp) with torque fill and torque vectoring functionality.\n" +
    "800V 4.5kWh liquid cooled battery pack; total weight 75kg",
        });
});

/* koenigsegg-agera S */
router.get('/koenigsegg-ageraS', function(req, res, next) {
  res.render('car',{
    picture:"images/2013-koenigsegg-agera-s-1.jpg",
      title:"SPECIFICATION",
    about:" Agera S Koenigsegg aluminum 5,0L V8, 4 valves per cylinder, double overhead camshafts.\n" +
    "Compression: 9.0:1\n" +
    "Bore: 91.7 mm Stroke: 95.25 mm\n" +
    "Sequential, multipoint fuel injection\n" +
    "Twin turbo superchargers\n" +
    "1.4 bar boost pressure\n" +
    "Dry sump lubrication\n" +
    "Carbon fibre intake manifold with optimised intake tracts.\n" +
    "Tig-welded ceramic coated inconel exhaust system manifold with merge collector.\n" +
    "Weight: 197 kg" +
    "Power output: 1030 hp at 7100 rpm – redline @ 8250 rpm\n" +
    "Torque: over 1000 Nm from 2700 to 6170 rpm\n" +
    "Max torque: 1100 Nm at 4100 rpm\n" +
    "Acceleration: 0-100 km/h (0-62 mph) 2.9 sec, 0-200 km/h 7,9 sec, 0-200-0 km/h 12.8 sec, 0-300-0 km/h 22,7 sec\n" +
    "Braking distance: 30.5m (100-0 km/h)\n" +
    "Lateral g-force: 1.6 g\n" +
    "Fuel consumption: Highway travel: 12,5 l/100km\n" +
    "Combined: 14,7/100km\n" +
    "Weight-to-power ratio: 1.24 kg/hp (dry weight)\n" +
    "Weight distribution: 44% front, 56% rear\n" +
    "Emission levels: Euro V and lev 2"
  });
});

/* koenigsegg-agera CCX */
router.get('/koenigsegg-ageraCCX', function(req, res, next) {
  res.render('car',{
    picture:"images/ccx.jpg",
      title:"SPECIFICATION",
    about:" Agera CCX Koenigsegg aluminium V8, 4 valves per cylinder, double overhead camshafts\n" +
    "Displacement: 4700 cc\n" +
    "Compression: 8.2:1\n" +
    "Sequential, multipoint fuel injection.\n" +
    "Twin Rotrex centrifugal superchargers with response system,\n" +
    "1.4 bar boost pressure.\n" +
    "Dry sump lubrication with oil spray piston cooling.\n" +
    "Power output: 806 Bhp at 7000 rpm\n" +
    "Maximum torque: 920 Nm (693 ft/lb) at 5500 rpm\n" +
    "Carbon fibre intake manifold with optimised intake tracts.\n" +
    "Patented response charge system for optimal engine response.\n" +
    "Tig-welded ceramic-coated stainless steel exhaust manifold with merge collector.\n" +
    "Emission levels: Euro IV and US and Carb.\n" +
    "Weight: 178 kg" +
    "Acceleration: 0-100 km/h (0-62 mp/h) 3.2 seconds\n" +
    "0-200 km/h 9.8 sec, 0-200-0 km/h 14 sec\n" +
    "0-300-0 km/h: 29.2 Sec\n" +
    "Top Speed: 395+ km/h (245+ mph)\n" +
    "Braking distance: 32m (100-0 km/h)\n" +
    "Lateral G-force: 1.3 G\n" +
    "Fuel consumption:\n" +
    "Highway travel: 13 l/100km\n" +
    "Combined: 17 l/100km\n" +
    "Weight-to-power ratio: 1.59 kg/hp\n" +
    "Weight distribution: 45% front, 55% rear"
  });
});

/*Gallery*/
router.get('/Gallery.html', function(req, res, next) {
    res.render('gallery',{
    });
});

/*Video*/
router.get('/koenigsegg-video', function(req, res, next) {
    res.render('video',{
    });


});



module.exports = router;
