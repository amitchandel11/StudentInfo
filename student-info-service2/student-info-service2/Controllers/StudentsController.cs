using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using student_info_service2.Models;

namespace student_info_service2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetStudents()
        {
            var students = new List<Student>
        {
            new Student
            {
                Name = "Alice",
                Age = 20,
                Hobbies = new List<string> { "reading", "swimming", "coding" }
            },
            new Student
            {
                Name = "Bob",
                Age = 22,
                Hobbies = new List<string> { "painting", "dancing", "singing" }
            }
        };

            return Ok(students);
        }
    }
}
