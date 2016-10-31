using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("主线程开始");

            ThreadTest();

            Console.WriteLine("主线程结束");
        }

        static void ThreadTest()
        {
            //实例化Thread，默认创建前台线程
            Thread t1 = new Thread(DoRun1);
            t1.Start();

            //可以通过修改Thread的IsBackground，将其变为后台线程
            Thread t2 = new Thread(DoRun2) { IsBackground = true };
            t2.Start();
        }
        static void DoRun1()
        {
            Thread.Sleep(500);
            Console.WriteLine("这是前台线程调用");
        }

        static void DoRun2()
        {
            Thread.Sleep(1200);
            Console.WriteLine("这是后台线程调用");
        }
    }
}
