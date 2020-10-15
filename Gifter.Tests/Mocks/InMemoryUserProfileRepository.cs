using System;
using System.Collections.Generic;
using System.Linq;
using Gifter.Models;
using Gifter.Repositories;


//void Add(UserProfile userProfile);
//void Delete(int id);
//List<UserProfile> GetAll();
//UserProfile GetById(int id);
//void Update(UserProfile userProfile);

namespace Gifter.Tests.Mocks
{
    class InMemoryUserProfileRepository : IUserProfileRepository
    {
        private readonly List<UserProfile> _data;

        public List<UserProfile> InternalData
        {
            get
            {
                return _data;
            }
        }

        public InMemoryUserProfileRepository(List<UserProfile> startingData)
        {
            _data = startingData;
        }

        public void Add(UserProfile userProfile)
        {
            var lastUserProfile = _data.Last();
            userProfile.Id = lastUserProfile.Id + 1;
            _data.Add(userProfile);
        }

        public void Delete(int id)
        {
            var userProfileTodelete = _data.FirstOrDefault(u => u.Id == id);
            if (userProfileTodelete == null)
            {
                return;
            }

            _data.Remove(userProfileTodelete);
        }

        public List<UserProfile> GetAll()
        {
            return _data;
        }

        public UserProfile GetById(int id)
        {
            return _data.FirstOrDefault(p => p.Id == id);
        }

        public void Update(UserProfile userProfile)
        {
            var currentUserProfile = _data.FirstOrDefault(u => u.Id == userProfile.Id);
            if (currentUserProfile == null)
            {
                return;
            }
            /*
             *  public int Id { get; set; }
        public string FirebaseUserId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }

        public string ImageUrl { get; set; }

        public string Bio { get; set; }

        [Required]
        public DateTime DateCreated { get; set; }

             * */

            currentUserProfile.Name = userProfile.Name;
            currentUserProfile.Email = userProfile.Email;
            currentUserProfile.DateCreated = userProfile.DateCreated;
            currentUserProfile.Bio = userProfile.Bio;
            currentUserProfile.Id = userProfile.Id;
            currentUserProfile.FirebaseUserId = userProfile.FirebaseUserId;
            currentUserProfile.ImageUrl = userProfile.ImageUrl;
        }


    }
}