/* Login and sign up functionality. Still a work in progress. */

import java.sql.*;



public class UserManagement

{
	/*	Inputs a string representing the username and the password
		Outputs an integer representing the status of the login
		
		0- Successful
		1- Unsuccessful */
		
	public static int login( String user, String password ) {

		Connection c = null;
		Statement stmt = null;
		try {
			Class.forName("org.postgresql.Driver");
			c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres","postgres","nutrition");;
	//      c.setAutoCommit(false);
			System.out.println("Successfully Connected.");
			stmt = c.createStatement();
			ResultSet rs = stmt.executeQuery( "select * from public.users where name = '"	 + user + "';" );
			if ( rs.next() ) {
				System.out.println("Username found");
				String name = rs.getString("name");
				String pw  = rs.getString("password");
				if (pw.equals(password)) {
					System.out.println("Login successful");
					rs.close();
					stmt.close();
					c.close();
					return 0;
				}
				else {
					System.out.println("Incorrect password");
					rs.close();
					stmt.close();
					c.close();
					return 1;
				}
			}
			else {
				System.out.println("Username not found");
				rs.close();
				stmt.close();
				c.close();
				return 0;
			}
		} catch ( Exception e ) {
			System.err.println( e.getClass().getName()+": "+ e.getMessage() );
			System.exit(0);
		}

		return 1;

   }
    public static void main(String args[])
    {

        Connection c = null;
        Statement stmt = null;
		String CreateSql = null;
		try
		{
            Class.forName("org.postgresql.Driver");
            c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres","postgres", "nutrition");
			System.out.println("Database Connected ..");
			stmt = c.createStatement();    
			CreateSql = "Create Table Users(id int primary key, name varchar, password varchar) ";
			stmt.executeUpdate(CreateSql);
			stmt.close();
			c.close();
			login("f","p");
		}
		catch (Exception e) {
			System.err.println( e.getClass().getName()+": "+ e.getMessage() );
			login("Kara","p");
			System.exit(0);
        }
		System.out.println("Table Created successfully");
    }
}