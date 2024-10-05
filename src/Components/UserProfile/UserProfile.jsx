import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../LevelContext/LevelContext";


const UserProfile = () => {
    const {user,updateProfileInfo} = useContext(AuthContext);
    const handleProfileChanges = (e) =>{
        e.preventDefault();
        const Name = e.target.name.value;
        const phtotoUrl = e.target.photoUrl.value;
        const profileObj = {
            displayName: Name, 
            photoURL: phtotoUrl
        }
        updateProfileInfo(profileObj)
        .then(() => {
            toast.success('Profile updated!')
          }).catch((error) => {
            toast.error(error.message);
          });
    }
    return (
        <div>
            <div className="w-60 mx-auto mt-5 border-2 rounded-full p-3">
          <img
            alt="User Profile"
            src={user?.photoURL} className="rounded-full w-60" />
        </div>
            <form className="card-body mx-auto md:w-2/3" onSubmit={handleProfileChanges}>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required value={user?.displayName}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoUrl</span>
          </label>
          <input type="text" name="photoUrl" placeholder="PhotoUrl" className="input input-bordered" required value={user?.photoURL} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required value={user?.email} disabled/>
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="Save changes" className="btn bg-[#59C6D2] text-white" />
        </div>
      </form>
        </div>
    );
};

export default UserProfile;