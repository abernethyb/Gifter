--SELECT * FROM UserProfile

--SELECT Id, Name, Email, ImageUrl, Bio, DateCreated FROM UserProfile WHERE Id = 1

--INSERT INTO UserProfile (Name, Email, ImageUrl, Bio, DateCreated)
--                        OUTPUT INSERTED.ID
--                        VALUES ('a name', 'email.email.com', NULL, Null, '2020-06-21 00:00:00.000')

SELECT p.Id AS PostId, p.Title, p.Caption, p.DateCreated AS PostDateCreated, 
                        p.ImageUrl AS PostImageUrl, p.UserProfileId,

                        up.Name, up.Bio, up.Email, up.DateCreated AS UserProfileDateCreated, 
                        up.ImageUrl AS UserProfileImageUrl
                    FROM Post p 
                        LEFT JOIN UserProfile up ON p.UserProfileId = up.id
                    WHERE p.DateCreated > '2020-06-28 00:00:00.000'