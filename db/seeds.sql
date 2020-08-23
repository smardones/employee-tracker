INSERT INTO department (name)
VALUES 
('accounting'),
('sales'),
('human resources'),
('marketing'),
('operations');

INSERT INTO role (title, salary, department_id)
VALUES
('accountant', 80000.00, 1),
('chief marketing officer', 170000.00, 4),
('consultant', 55000.00, 2),
('business development officer', 75000.00, 2),
('receptionist', 40000.00, 5),
('accounts payable representative', 45000.00, 1),
('recognition officer', 36000.00, 3),
('head reseracher', 65000.00, 4),
('security guard', 47000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Courtney', 'Act', 3, 2),
('Bianca', 'Del Rio', 2, null),
('Roxy', 'Andrews', 3, 2),
('Kim', 'Chi', 8, 2),
('Naomi', 'Smalls', 5, 2),
('Cheryl', 'Hole', 5, 2),
('Trixie', 'Mattel', 2, 2),
('Monet', 'Exchange', 1, 2),
('Jaida', 'Hall', 3, 2),
('Gigi', 'Goode', 7, 2),
('Chad', 'Michaels', 8, 2),
('Latrice', 'Royale', 9, 2),
('Alexis', 'Mateo', 6, 2),
('Kennedy', 'Davenport', 7, 2),
('Gia', 'Gunn', 3, 2);