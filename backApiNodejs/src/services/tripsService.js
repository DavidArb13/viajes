const mysqlConnection = require('../config/database');

const login = (data, result, err) => {
    const { username, password } = data
    mysqlConnection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (error, rows) => {
        if (!error) {
            if (rows.length) {
                result({ mensaje: 'Ingreso Exitoso' });
            } else {
                result({ mensaje: 'Usuario invalido' });
            }
        } else {
            err({ mensaje: error.message });
        }
    });
};

const searchCountries = (result, err) => {
    mysqlConnection.query('SELECT * FROM countries', (error, rows) => {
        if (!error) {
            result(rows);
        } else {
            err({ mensaje: error.message });
        }
    });
};

const searchStates = (result, err) => {
    mysqlConnection.query('SELECT * FROM states', (error, rows) => {
        if (!error) {
            result(rows);
        } else {
            err({ mensaje: error.message });
        }
    });
};

const searchCities = (result, err) => {
    mysqlConnection.query('SELECT * FROM cities', (error, rows) => {
        if (!error) {
            result(rows);
        } else {
            err({ mensaje: error.message });
        }
    });
};

const searchTrips = (result, err) => {
    mysqlConnection.query('SELECT * FROM trips', (error, rows) => {
        if (!error) {
            result(rows);
        } else {
            err({ mensaje: error.message });
        }
    });
};

const addTrips = (data, result, err) => {
    mysqlConnection.query('INSERT INTO trips SET ?', data, (error) => {
        if (!error) {
            result({ mensaje: 'Trips saved' });
        } else {
            err({ mensaje: error.message });
        }
    });
};


module.exports = { searchTrips, addTrips, login, searchCountries, searchStates, searchCities };