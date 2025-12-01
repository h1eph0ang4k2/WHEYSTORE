using FluentMigrator;

namespace whey.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20251122_1404)]
public class DefaultDB_202511223_1404_ThuongHieu : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("ThuongHieu")
       .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
       .WithColumn("TenThuongHieu").AsString(150).NotNullable()   
       .WithColumn("Slug").AsString(150).Nullable()       
       .WithColumn("Logo").AsString(255).Nullable()        
       .WithColumn("MoTa").AsString(int.MaxValue).Nullable()
       .WithColumn("ThuTu").AsInt32().NotNullable().WithDefaultValue(0)          
       .WithColumn("HienThi").AsBoolean().NotNullable().WithDefaultValue(true)        
       .WithColumn("NoiBat").AsBoolean().NotNullable().WithDefaultValue(false)         
       .WithColumn("CreatedAt").AsDateTime2().NotNullable()
       .WithDefault(SystemMethods.CurrentDateTime)
       .WithColumn("UpdatedAt").AsDateTime2().Nullable();
    }
}