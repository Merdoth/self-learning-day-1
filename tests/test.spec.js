import Computer from '../computers';
import Desktop from '../desktop';
import Laptop from '../laptop';
import mocha from 'mocha';
import chai from 'chai';

const expect = chai.expect;
describe('Computer', () => {
    let computer = new Computer('Dell', 'Grey', '16Gb', '1Tb', '4.5Hz');
    //handleling valid inputs
    describe('Creates an Object', () => {
        // Instatiation
        it('should create object if instantiated with valid input and return 3 as live', () => {
            expect(computer.manufacturer).to.equal('Dell');
        });

    });

    describe('Handles Invalid input', () => {
        // Instatiation
        let result = function () {
          return  computer = new Computer(1, 'Grey', '16Gb', '1Tb', '4.5Hz');
        }
        
        it('should create object if instantiated with valid input and return 3 as live', () => {
            expect(result).to.throw(TypeError, 'Invalid input type');
        });

    });    

});

describe('Desktop', () => {
    let desktop = new desktop('Dell', 'Grey', '16Gb', '1Tb', '4.5Hz');
    //handleling valid inputs
    describe('Creates an Object', () => {
        // Instatiation
        it('should create object if instantiated with valid input and return 3 as live', () => {
            expect(computer.manufacturer).to.equal('Dell');
        });

    });

    describe('Handles Invalid input', () => {
        // Instatiation
        let result = function () {
          return  computer = new Computer(1, 'Grey', '16Gb', '1Tb', '4.5Hz');
        }
        
        it('should create object if instantiated with valid input and return 3 as live', () => {
            expect(result).to.throw(TypeError, 'Invalid input type');
        });

    });    

});

describe('Laptop', () => {
    let computer = new Computer('Dell', 'Grey', '16Gb', '1Tb', '4.5Hz');
    //handleling valid inputs
    describe('Creates an Object', () => {
        // Instatiation
        it('should create object if instantiated with valid input and return 3 as live', () => {
            expect(computer.manufacturer).to.equal('Dell');
        });

    });

    describe('Handles Invalid input', () => {
        // Instatiation
        let result = function () {
          return  computer = new Computer(1, 'Grey', '16Gb', '1Tb', '4.5Hz');
        }
        
        it('should create object if instantiated with valid input and return 3 as live', () => {
            expect(result).to.throw(TypeError, 'Invalid input type');
        });

    });    

});




