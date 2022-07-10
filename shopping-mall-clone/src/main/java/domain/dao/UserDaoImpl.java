package domain.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import domain.entity.User;
import domain.jdbc.DBConnectionMgr;

public class UserDaoImpl implements UserDao {
	private final DBConnectionMgr pool;

	private String sql;
	private Connection con;
	private PreparedStatement pstmt;
	private ResultSet rs;
	
	enum Insert {
		USERNAME(1), EMAIL(2), PASSWORD(3), NAME(4), PROVIDER(5);
		
		private final int value;
		Insert(int value) {this.value = value;}
		public int value() {return value;}
	}
	
	enum Select {
		USER_ID(1), USERNAME(2), EMAIL(3), PASSWORD(4), NAME(5), PROVIDER(6), AUTHORITY(7), PROFILE_IMG(8), ADDRESS(9), PHONE(10), GENDER(11);
		
		private final int value;
		Select(int value) {this.value = value;}
		public int value() {return value;}
	}
	
	public UserDaoImpl() {
		pool = DBConnectionMgr.getInstance();
	}
	
	@Override
	public int save(User user) throws Exception {
		sql = "INSERT INTO user_mst\n"
				+ "VALUES(\n"
				+ "	0,\n"
				+ "	?,\n"
				+ "	?,\n"
				+ "	?,\n"
				+ "	?,\n"
				+ " ?,\n"
				+ "	NOW(),\n"
				+ "	NOW()\n"
				+ ");";
		
		return (int) sqlExecuteUpdate(sql, user);
	}

	@Override
	public User findUserByUsername(String username) throws Exception {
			User user = null;
			sql = "SELECT\n"
					+ "	um.user_id,\n"
					+ "	um.username,\n"
					+ "	um.email,\n"
					+ "	um.password,\n"
					+ "	um.name,\n"
					+ "	um.provider,\n"
					+ "	auth.authority,\n"
					+ "	ud.user_profile_img,\n"
					+ "	ud.user_address,\n"
					+ "	ud.user_phone,\n"
					+ "	ud.user_gender\n"
					+ "FROM\n"
					+ "	user_mst um\n"
					+ "	LEFT OUTER JOIN user_dtl ud ON(ud.user_id = um.user_id)\n"
					+ "	LEFT OUTER JOIN authorities auth ON(auth.username = um.username)\n"
					+ "WHERE\n"
					+ "	um.username = ?";
			
			con = pool.getConnection();
			
			try {
				pstmt = con.prepareStatement(sql);
				pstmt.setString(1, username);
				rs = pstmt.executeQuery();
				
				if(rs.next()) {
					user = User.builder()
							.userId(rs.getInt(Select.USER_ID.value()))
							.username(rs.getString(Select.USERNAME.value()))
							.email(rs.getString(Select.EMAIL.value()))
							.password(rs.getString(Select.PASSWORD.value()))
							.name(rs.getString(Select.NAME.value()))
							.provider(rs.getString(Select.PROVIDER.value()))
							.authority(rs.getString(Select.AUTHORITY.value()))
							.profileImg(rs.getString(Select.PROFILE_IMG.value()))
							.address(rs.getString(Select.ADDRESS.value()))
							.phone(rs.getString(Select.PHONE.value()))
							.gender(rs.getInt(Select.GENDER.value()))
							.build();
				}
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				pool.freeConnection(con, pstmt, rs);
			}
		return user;
	}

	@Override
	public int modify(int usercode) throws Exception {
		return 0;
	}

	@Override
	public int remove(int usercode) throws Exception {
		return 0;
	}

	private Object sqlExecuteUpdate(String sql, User user) throws Exception {
		Object result = null;
		con = pool.getConnection();
		
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setString(Insert.USERNAME.value(), user.getUsername());
			pstmt.setString(Insert.EMAIL.value(), user.getEmail());
			pstmt.setString(Insert.PASSWORD.value(), user.getPassword());
			pstmt.setString(Insert.NAME.value(), user.getName());
			pstmt.setString(Insert.PROVIDER.value(), user.getProvider());
			
			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt);
		}
		return (Object) result;
	}
}
