DROP DATABASE IF EXISTS movieapp;
CREATE DATABASE movieapp;

\c movieapp

CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  name VARCHAR UNIQUE NOT NULL
);

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  genre_id INT NOT NULL,
    FOREIGN KEY (genre_id)
    REFERENCES genres(id)
    ON DELETE CASCADE,
  img_url VARCHAR NOT NULL
);

CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  stars INT NOT NULL,
  movie_id INT NOT NULL,
    FOREIGN KEY (movie_id)
    REFERENCES movies(id)
    ON DELETE CASCADE
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  text VARCHAR NOT NULL,
  movie_id INT NOT NULL,
    FOREIGN KEY (movie_id)
    REFERENCES movies(id)
    ON DELETE CASCADE
);

INSERT INTO genres (name) VALUES
  ('Action'), ('Adventure'), ('Comedy'), ('Crime'), ('Documentary'), 
  ('Drama'), ('Family'), ('Fantasy'), ('Noir'), ('History'), 
  ('Horror'), ('Musical'), ('Mystery'), ('Romance'), ('Sci-Fi'), 
  ('Sport'), ('Superhero'), ('Thriller'), ('War'), ('Western');

INSERT INTO movies (title, genre_id, img_url) VALUES
  ('Die Hard', 1, 'https://resizing.flixster.com/DjlFzpfhwune5rBHBPkmHvpl_u8=/fit-in/200x296.2962962962963/v1.bTsxMTI5MjI1NztqOzE4MDg1OzEyMDA7OTAwOzEyMDA'),
  ('Spider-Man: Into the Spider-Verse', 17, 'https://resizing.flixster.com/9pw4RxPIBe3hn2HSBoNDUEYQHz8=/fit-in/200x296.2962962962963/v1.bTsxMjg3MjM1MDtqOzE4MDU4OzEyMDA7NjA3Mjs5MDAw'),
  ('Ralph Breaks the Internet', 3, 'https://resizing.flixster.com/k6IVSIjykVjMPtKg6nUpPMX_fjw=/fit-in/200x296.2962962962963/v1.bTsxMjg1NjQ0NDtqOzE4MDU4OzEyMDA7MTAxNDsxNTAw'),
  ('Dragon Ball Super: Broly', 1, 'https://resizing.flixster.com/KJZcQR7XsIP_UOUcc5iB5umXkME=/fit-in/200x296.2962962962963/v1.bTsxMjk0MjEzNDtqOzE4MDU5OzEyMDA7NjQ5Ozk2MA'),
  ('Pacific Rim', 15, 'https://resizing.flixster.com/jV8YncWiqezQFZaDYoP4Z6CrD-c=/206x305/v1.bTsxMTE3MzkzMztqOzE4MDg0OzEyMDA7ODAwOzEyMDA'),
  ('Deadpool', 3, 'https://resizing.flixster.com/3cvLNrqFo5kHAUYXHPOFwjmbK3U=/fit-in/200x296.2962962962963/v1.bTsxMTQyMDkxNDtqOzE4MDg3OzEyMDA7MTAwMDsxNDgw'),
  ('Captain Marvel', 17, 'https://resizing.flixster.com/f_FyGumRuU-oykuGilH_8mQKAy8=/fit-in/200x296.2962962962963/v1.bTsxMjkyNjcxNjtqOzE4MDU5OzEyMDA7MTY4ODsyNTAw'),
  ('Spider-Man: Homecoming', 17, 'https://resizing.flixster.com/jSyROFkcBWZcnYwxic_h0SkUx7k=/fit-in/200x296.2962962962963/v1.bTsxMjQxNTA2NTtqOzE4MDUzOzEyMDA7Mzc4OzU2MA'),
  ('The Lego Movie', 7, 'https://resizing.flixster.com/AUc521wX7FF8iEhZ_Dr2r4sBK6M=/fit-in/200x296.2962962962963/v1.bTsxMTE3NzY1NTtqOzE4MDg0OzEyMDA7MTQwMDsyMTAw'),
  ('Avengers: Infinity War', 17, 'https://resizing.flixster.com/AUc521wX7FF8iEhZ_Dr2r4sBK6M=/fit-in/200x296.2962962962963/v1.bTsxMTE3NzY1NTtqOzE4MDg0OzEyMDA7MTQwMDsyMTAw');

INSERT INTO ratings (stars, movie_id) VALUES
  (5,1),(5,2),(4,3),(4,4),(3,5),(5,6),(3,7),(5,8),(3,9),(2,10),
  (4,1),(5,2),(4,3),(3,4),(4,5),(5,6),(3,7),(5,8),(3,9),(3,10);

INSERT INTO comments (text, movie_id) VALUES
  ('Best. Christmas. Movie. EVER.',1),
  ('Phenomenal art and animation, really hope we get a sequel.',2),
  ('Riveting.',3),
  ('The pacing needs work but, enjoyable nonetheless.',4),
  ('Chicks dig giant robots.',5),
  ('Fun for the whole family.',6),
  ('Not a very compelling movie, passable.',7),
  ('Best Spider-Man movie to date.',8),
  ('An enjoyable experience, fun for the whole family.',9),
  ('2 hours and 20 minutes of build up, 5 mins of pay off.',10),
  ('"I stepped on glass, then killed your brother. Yipee-ki-yay ******." - John McClane, probably"',1),
  ('Spider-Ham movie when?',2),
  ('Heartwarming and funny.',3),
  ('Great animation and art, CGI  was questionable.',4),
  ('Could have done without the romantic subplot.',5);