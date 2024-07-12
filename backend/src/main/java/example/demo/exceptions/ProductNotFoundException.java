package example.demo.exceptions;

public class ProductNotFoundException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ProductNotFoundException(int id) {
		super("Could not found the user with id " + (id));
	}
}
