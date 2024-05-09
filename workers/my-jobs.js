'use strict';

module.exports = async (job, done) => {
  try {
    console.log('Test de job');
    job.progress(0);
    setTimeout(() => job.progress(20), 5000);
    setTimeout(() => job.progress(40), 10000);
    setTimeout(() => job.progress(60), 15000);
    setTimeout(() => job.progress(80), 20000);
    setTimeout(() => job.progress(100), 25000);
    console.log('Job completado');
    done();
  } catch (error) {
    return done(error);
  }
};
