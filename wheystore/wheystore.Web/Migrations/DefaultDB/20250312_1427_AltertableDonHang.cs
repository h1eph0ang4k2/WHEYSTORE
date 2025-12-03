using FluentMigrator;
using Serenity.Extensions;

namespace wheystore.Migrations.DefaultDB
{
    [MigrationKey(20250312_1427)]
    public class DefaultDB_20250312_1427_AltertableDonHang
        : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("DonHang")
                .AlterColumn("TinhThanhNguoiNhan").AsString(100).NotNullable()
                .AlterColumn("QuanHuyenNguoiNhan").AsString(100).NotNullable()
                .AlterColumn("PhuongXaNguoiNhan").AsString(100).NotNullable()
                .AlterColumn("MaBuuChinhNguoiNhan").AsString(100).NotNullable()
                .AlterColumn("TrangThaiDonHang").AsInt16().NotNullable().WithDefaultValue(0);


        }
    }
}