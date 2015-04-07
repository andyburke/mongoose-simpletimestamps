'use strict';

exports.SimpleTimestamps = function( schema ) {
    schema.add( {
        createdAt: Date,
        updatedAt: Date
    } );
    
	schema.pre( 'init', function( next ) {
		if ( !this.createdAt ) {
			this.createdAt = this.updatedAt = new Date();
		}
		next();
    } );

	schema.pre( 'save', function( next ) {
		this.updatedAt = new Date();
        next();
    } );
};