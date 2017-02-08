const Sequelize = require('sequelize');

const sequelize = new Sequelize('pongconx', 'pongconx', '123456', {
  host: 'localhost',
  dialect: 'postgres',
});
// Or you can simply use a connection uri
// var sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

// sequelize
//   .authenticate()
//   .then(function(err) {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(function (err) {
//     console.log('Unable to connect to the database:', err);
//   });

const Event = sequelize.define('event', {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id: {
    type: Sequelize.STRING,
  },
  summary: {
    type: Sequelize.STRING,
  },
  htmlLink: {
    type: Sequelize.STRING,
  },
  sequence: {
    type: Sequelize.INTEGER,
  },
  created: {
    type: Sequelize.DATE,
  },
  updated: {
    type: Sequelize.DATE,
  },
  start: {
    type: Sequelize.DATE,
  },
  end: {
    type: Sequelize.DATE,
  },
});

// // what does the sync method do?
// sequelize.sync({ logging: console.log }).then(() => {
//   id: Sequelize.STRING,
//   summary: Sequelize.STRING,
//   htmlLink: Sequelize.STRING,
//   sequence: Sequelize.INTEGER,
//   created: Sequelize.DATE,
//   updated: Sequelize.DATE,
//   start: Sequelize.DATE,
//   end: Sequelize.DATE,
// });

module.exports = (data) => {
  const eventArray = [];

  Object.keys(data).forEach((date) => {
    data[date].forEach((event) => {
      eventArray.push({
        id: event.id,
        summary: event.summary,
        htmlLink: event.htmlLink,
        sequence: event.sequence,
        created: new Date(event.created),
        updated: new Date(event.updated),
        start: new Date(event.start.dateTime),
        end: new Date(event.end.dateTime),
      });
    });
    // console.log(eventArray);
    sequelize.sync().then(() => Event.bulkCreate(eventArray));
  });
};
